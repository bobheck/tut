using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using TestProjc5.Filters;

namespace TestProjc5.Controllers
{
    public class ValuesController : ApiController
    {
        // GET: api/Values
        [HttpGet, Route("")]
        [RouteTimerFilter("GetVals")]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        [HttpGet, Route("{id:int}")]
        // GET: api/Values/5
        public string Get(int id)
        {
            return "value";
        }

        [HttpPost, Route("")]
        // POST: api/Values
        public void Post([FromBody]string value)
        {
        }

        [HttpPut, Route("{id:int}")]
        // PUT: api/Values/5
        public void Put(int id, [FromBody]string value)
        {
        }

        [HttpDelete, Route("{id:int}")]
        // DELETE: api/Values/5
        public void Delete(int id)
        {
        }
    }
}
