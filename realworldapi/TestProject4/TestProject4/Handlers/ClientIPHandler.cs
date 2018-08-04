using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using System.Web;

namespace TestProject4.Handlers
{
    public class ClientIPHandler : DelegatingHandler
    {
        // new style header:   "Forwarded: by=<identifier>; for=<identifier>; host=<host>; proto=<http|https>"  
        //https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Forwarded
        const string _fwdHeader = "Forwarded";

        // old style, separate headers
        //https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Forwarded-Host
        const string _fwdHostHeader = "X-Forwarded-Host";

        public const string MyClientIpProperty = "MyClientIP";

        protected override Task<HttpResponseMessage> SendAsync(
      HttpRequestMessage request, CancellationToken cancellationToken)
        {
            string host = null;

            if (request.Headers.Contains(_fwdHostHeader))
            {
                // the forwarded host string 
                host = request.Headers.GetValues(_fwdHostHeader)
                    .FirstOrDefault(s => !String.IsNullOrEmpty(s));
            }

            // next try the newer Forwarded header
            else if (request.Headers.Contains(_fwdHeader))
            {
                // grab the forward host string 
                var fwd = request.Headers.GetValues(_fwdHeader)
                    .FirstOrDefault(s => !String.IsNullOrEmpty(s))
                    ?.Split(';')
                    .Select(s => s.Trim());

                if (fwd != null)
                {
                    host = fwd.FirstOrDefault(s => s.ToLowerInvariant().StartsWith("host="));
                    if (!String.IsNullOrEmpty(host))
                    {
                        host = host.Substring(5).Trim();
                    }
                }
            }
            else if (request.Properties.ContainsKey("MS_HttpContext"))
            {
                if (request.Properties["MS_HttpContext"] is HttpContextBase ctx)
                {
                    host = ctx.Request.UserHostAddress;
                }
            }

            request.Properties.Add(MyClientIpProperty, host);

            // continue the handler chain
            return base.SendAsync(request, cancellationToken);
        }

    }

    public static class ClientIpHandlerExtensions
    {
        public static string GetClientIpAddress(this HttpRequestMessage request)
        {
            if (request == null)
                return null;

            if (request.Properties.TryGetValue(ClientIPHandler.MyClientIpProperty,
                out object ip))
            {
                return (string)ip;
            }

            return null;
        }

    }
}