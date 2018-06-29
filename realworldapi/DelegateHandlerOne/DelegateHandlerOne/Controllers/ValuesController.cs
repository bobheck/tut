using DelegateHandlerOne.Handlers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;


namespace DelegateHandlerOne.Controllers
{
    [RoutePrefix("values")]
    public class ValuesController : ApiController
    {
        // GET: /values
        [HttpGet, Route("")]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2", Request.GetApiKey() };
        }

        // GET: /values
        [Route("")]
        [AcceptVerbs("HEAD","VIEW")]
        public IEnumerable<string> CheckOverrides()
        {
            return new string[] { "over1", "over2" };
        }



        // GET: /values/5
        [HttpGet, Route("{id:int}")]
        public string Get(int id)
        {
            return $"value: {id}";
        }

        // POST: /values
        [HttpPost, Route("")]
        public void Post([FromBody]string value)
        {

        }

        // PUT: values/5
        [HttpPut, Route("{id:int}")]
        public void Put(int id, [FromBody]string value)
        {
            
        }
        
        // DELETE: api/Values/5
        [HttpDelete, Route("{id:int}")]
        public void Delete(int id)
        {
        }
    }
}
