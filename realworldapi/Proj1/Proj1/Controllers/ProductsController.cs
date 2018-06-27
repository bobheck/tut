using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;


// https://docs.microsoft.com/en-us/aspnet/web-api/overview/web-api-routing-and-actions/attribute-routing-in-web-api-2#route-constraints

namespace Proj1.Controllers
{
    [RoutePrefix("products")]
    public class ProductsController : ApiController
    {

        [JsonConverter(typeof(StringEnumConverter))]
        public enum Widgets
        {
            Bolt,
            Screw,
            Nut,
            Motor
        }

        // GET: Products/widget/xxx
        [HttpGet, Route("widget/{widget:enum(Proj1.Controllers.ProductsController+Widgets)}")]
        public string GetProductsWithWidget(Widgets widget)
        {
            return $"widget-{widget}";
        }
        
        // GET: api/Products
        [Route("")]
        [Route("~/prods")]
        [AcceptVerbs("GET", "SHOW")]
        public IEnumerable<string> GetAllProducts()
        {
            return new string[] { "product1", "product2" };
        }

        // GET: api/Products/5
        [HttpGet, Route("{id:int:range(1000,3000)}", Name = "GetById")]
        public string Get(int id)
        {
            return "product";
        }


        // GET: api/Products/5/orders/custid
        [HttpGet, Route("{id:int:range(1000,3000)}/orders/{custid}")]
        public string Get(int id, string custid)
        {
            return $"product {id} -orders " + custid;
        }

        
        // POST: api/Products
        [HttpPost, Route("")]
        public void CreateProduct([FromBody]string value)
        {
        }

        [HttpPost, Route("{prodId:int:range(1000,3000)}")]
        public HttpResponseMessage CreateProduct([FromUri] int prodId)
        {
            // do some create logic, then...

            var response = Request.CreateResponse(HttpStatusCode.Created);

            // Create the self-referencing link to the new item and set the response Location header
            string uri = Url.Link("GetById", new {id = prodId});
            response.Headers.Location = new Uri(uri);
            return response;
        }
        
        // PUT: api/Products/5
        [HttpPut, Route("{id:int:range(1000,3000)}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Products/5
        [HttpDelete, Route("{id:int:range(1000,3000)}")]
        public void Delete(int id)
        {
        }
        
    }
}
