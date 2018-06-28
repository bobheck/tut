using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Routing;

namespace EnumerationRouteConstraint
{
    public class EnumerationConstraint : IHttpRouteConstraint
    {
        private readonly Type _enum;

        public EnumerationConstraint(string type)
        {
            var t = GetType(type);

            if (t == null || !t.IsEnum)
            {
                throw new ArgumentException("Argument is not an Enum type", "type");
            }
            _enum = t;
        }

        private static Type GetType(string typeName)
        {
            var type = Type.GetType(typeName);
            if (type != null) return type;
            foreach (var a in AppDomain.CurrentDomain.GetAssemblies())
            {
                type = a.GetType(typeName);
                if (type != null) { return type; }
            }
            return null;
        }

        public bool Match(HttpRequestMessage request, IHttpRoute route, string parameterName,
            IDictionary<string, object> values, HttpRouteDirection routeDirection)
        {

            if (values.TryGetValue(parameterName, out object value) && value != null)
            {
                var stringVal = value as string;
                if (!String.IsNullOrEmpty(stringVal))
                {
                    // see if we can find the string in the enumeration members
                    stringVal = stringVal.ToLower();
                    if (null != _enum.GetEnumNames().FirstOrDefault(a => a.ToLower().Equals(stringVal)))
                    {
                        return true;
                    }
                }
            }
            return false;
        }
    }
}
