using DelegateHandlerOne.Handlers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;

namespace DelegateHandlerOne
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            // Web API configuration and services
            //config.MessageHandlers.Add(new FullPipelineTimerHandler());
            //config.MessageHandlers.Add(new ApiKeyHeaderHandler());
            config.MessageHandlers.Add(new MethodOverrideHandler());
            // Web API routes
            config.MapHttpAttributeRoutes();

            //config.Routes.MapHttpRoute(
            //    name: "DefaultApi",
            //    routeTemplate: "api/{controller}/{id}",
            //    defaults: new { id = RouteParameter.Optional }
            //);
        }
    }
}
