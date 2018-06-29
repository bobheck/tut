using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using System.Web;

namespace DelegateHandlerOne.Handlers
{
    public class MethodOverrideHandler : DelegatingHandler
    {
        public const string _overrideHeader = "X-HTTP-Method-Override";
        
        protected override Task<HttpResponseMessage> SendAsync(
           HttpRequestMessage request, CancellationToken cancellationToken)
        {
            // STEP 1: Global message-level logic that must me executed BEFORE the request
            //          is sent on the action method
            string _overrideMethod = null;

            if (!request.Method.Method.ToUpperInvariant().Equals("POST"))
            {
                return base.SendAsync(request, cancellationToken);
            }

            List<string> _validMethods = new List<string> { "PUT", "PATCH", "DELETE", "HEAD", "VIEW" };
            // save the value to Properties
            // set the request method
            if (request.Headers.Contains(_overrideHeader))
            {
                _overrideMethod = request.Headers.GetValues(_overrideHeader).FirstOrDefault();

                if (!string.IsNullOrEmpty(_overrideMethod) && _validMethods.Contains(_overrideMethod.ToUpperInvariant()))
                {
                    request.Properties.Add(_overrideHeader, _overrideMethod);
                    request.Method = new HttpMethod(_overrideMethod);
                }
            }

            // compress steps 2, 3, and 4 into one line since we don't need any post-request processing
            return base.SendAsync(request, cancellationToken);

            // STEP 2: Call the rest of the pipeline, all the way to teh response message

            // STEP 3: Any global message-level logic that must be executed AFTER the request
            //          has executed, before the final HTTP response message

            // STEP 4: Return the final HTTP response

        }
    }

    public static class HttpRequestMessageMethodOverrideExtension
    {
        public static string GetOverrideMethod(this HttpRequestMessage request)
        {
            if (request == null)
            {
                return null;
            }

            if (request.Properties.TryGetValue(MethodOverrideHandler._overrideHeader, out object overrideMethod))
            {
                return (string)overrideMethod;
            }

            return null;
        }
    }
}