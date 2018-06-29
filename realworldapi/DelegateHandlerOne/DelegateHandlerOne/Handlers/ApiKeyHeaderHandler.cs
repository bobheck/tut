using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using System.Web;

namespace DelegateHandlerOne.Handlers
{
    public class ApiKeyHeaderHandler : DelegatingHandler
    {
        /// <summary>
        /// Name of our custom header to look for
        /// </summary>
        public const string _apiKeyHeader = "X-API-Key";

        /// <summary>
        /// Name of api key query string key
        /// </summary>
        public const string _apiQueryString = "api_key";

        protected override Task<HttpResponseMessage> SendAsync(
             HttpRequestMessage request, CancellationToken cancellationToken)
        {
            // STEP 1: Global message-level logic that must me executed BEFORE the request
            //          is sent on the action method
            string apikey = null;

            //if (request.RequestUri.Segments[1].ToLowerInvariant().StartsWith("swagger"))
            //{
            //    return base.SendAsync(request, cancellationToken);
            //}

            if (request.Headers.Contains(_apiKeyHeader))
            {
                apikey = request.Headers.GetValues(_apiKeyHeader).FirstOrDefault();
            }
            else
            {
                // let's see if it is on the query string instead
                var queryString = request.GetQueryNameValuePairs();
                var kvp = queryString.FirstOrDefault(a => a.Key.ToLowerInvariant().Equals(_apiQueryString));
                if (!string.IsNullOrEmpty(kvp.Value))
                {
                    apikey = kvp.Value;
                }
            }

            // was any api key present? If none, abort request
            //if(string.IsNullOrEmpty(apikey))
            //{
            //    // Create the response.
            //    var response = new HttpResponseMessage(System.Net.HttpStatusCode.Forbidden)
            //    {
            //        Content = new StringContent("Missing API key")
            //    };
            //    return Task.FromResult(response);
            //}

            if (string.IsNullOrEmpty(apikey))
            {
                request.Properties.Remove(_apiKeyHeader);
            }
            else
            {
                request.Properties.Add(_apiKeyHeader, apikey);
            }
                // save the value to Properties
                

            // compress steps 2, 3, and 4 into one line since we don't need any post-request processing
            return base.SendAsync(request, cancellationToken);


            // STEP 2: Call the rest of the pipeline, all the way to teh response message

            // STEP 3: Any global message-level logic that must be executed AFTER the request
            //          has executed, before the final HTTP response message

            // STEP 4: Return the final HTTP response

        }

    }

    public static class HttpRequestMessageApiKeyExtension
    {
        public static string GetApiKey(this HttpRequestMessage request)
        {
            if (request == null)
            {
                return null;
            }

            if (request.Properties.TryGetValue(ApiKeyHeaderHandler._apiKeyHeader, out object apiKey))
            {
                return (string)apiKey;
            }

            return null;
        }
    }
}