using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using TestProjc5.Filters;

namespace TestProjc5.Controllers
{
    public class Values2Controller : ApiController
    {
        // GET: api/Values2
        [HttpGet, Route("v2")]
        [ClientCacheControlFilter(ClientCacheControl.Private, 10)]
        public IEnumerable<string> Get()
        {
            Trace.WriteLine($"{DateTime.Now.ToLongTimeString()} Get called");
            return new string[] { "value1", "value2" };
        }

        [HttpGet, Route("v2/{id:int}")]
        // GET: api/Values2/5
        public string Get(int id)
        {
            return "value";
        }

        [HttpPost, Route("v2")]
        // POST: api/Values2
        public void Post([FromBody]string value)
        {
        }

        [HttpPut, Route("v2/{id:int}")]
        // PUT: api/Values2/5
        public void Put(int id, [FromBody]string value)
        {
        }

        [HttpDelete, Route("v2/{id:int}")]
        // DELETE: api/Values2/5
        public void Delete(int id)
        {
        }
    }
}
