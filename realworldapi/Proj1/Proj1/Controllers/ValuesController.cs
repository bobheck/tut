using System;
using System.CodeDom;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.ModelBinding;
using Proj1.Models;


namespace Proj1.Controllers
{
    public class ValuesController : ApiController
    {
        // GET: api/Values
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/Values/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Values
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Values/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Values/5
        public void Delete(int id)
        {
        }

       

        // example base64 binary data, converts to a sample json object:  
        // ew0KICAibnVtYmVyIjogMTIzLA0KICAib2JqZWN0Ijogew0KICAgICJhIjogImIiLA0KICAgICJjIjogImQiLA0KICAgICJlIjogImYiDQogIH0sDQogICJzdHJpbmciOiAiSGVsbG8gV29ybGQiDQp9
        [HttpGet, Route("binary/{array:base64:maxlength(512)}")]
        public string GetBinaryArray([ModelBinder(typeof(Base64Constraint.Base64ParameterModelBinder))]
            byte[] array)
        {
            return System.Text.Encoding.UTF8.GetString(array);

        }


        [HttpGet, Route("complex")]
        public IHttpActionResult ComplextTest([FromUri] ComplexTypeDto obj)
        {
            return Json(obj);
        }

        [HttpPut, Route("bodytest")]
        public string BodyTest([FromBody] string value)
        {
            return value;
        }

        [HttpPost, Route("complexBody")]
        public IHttpActionResult ComplexBodyTest([FromBody] ReportInfo obj)
        {
            return Json(obj);
        }

        // wildcard binding
        // only one of the parameters can use a wildcard
        [HttpGet, Route("dates/{*myDate:datetime}")]
        public string GetDate(DateTime myDate)
        {
            return myDate.ToLongDateString();
        }


        // variable length parameter with unknown number of segments
        // all passed as one string
        [HttpGet, Route("segments/{*array:maxlength(256)}")]
        public string[] GetSegments([ModelBinder(typeof(StringArrayWildcardBinder))] string[] array)
        {
            return array;
        }
        
    }

    public class ReportInfo
    {
        public string QTOutFile { get; set; }
        public string BasePlatePDFReportAsBase64 { get; set; }

        public string FlangePlatePDFReportAsBase64 { get; set; }

        public string ModelSummaryPDFReportAsBase64 { get; set; }

        public string ABDrawingScript { get; set; }
        public string PEPoleDrawingScript { get; set; }
    }
}
