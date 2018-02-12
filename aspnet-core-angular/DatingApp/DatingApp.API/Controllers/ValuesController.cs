using System;
using DatingApp.API.Data;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace DatingApp.API.Controllers {
    [Route ("api/[controller]")]
    public class ValuesController : Controller {
        private readonly DataContext _context;
        public ValuesController (DataContext context) {
            _context = context;
        }

        // Synchronus method
        // GET api/values
        // [HttpGet]
        // public IActionResult GetValues() {
        //     var values = _context.Values.ToList();
        //     return Ok(values);
        // }

        // Asynchronus method
        // GET api/values
        [HttpGet]
        public async Task<IActionResult> GetValues() {
            var values = await _context.Values.ToListAsync();
            return Ok(values);
        }

        // GET api/values/5
        [HttpGet ("{id}")]
        public async Task<IActionResult>  GetValue(int id)  {
            var value = await _context.Values.FirstOrDefaultAsync(v=>v.Id==id);
            return Ok(value);
        }

        // POST api/values
        [HttpPost]
        public void Post ([FromBody] string value) { }

        // PUT api/values/5
        [HttpPut ("{id}")]
        public void Put (int id, [FromBody] string value) { }

        // DELETE api/values/5
        [HttpDelete ("{id}")]
        public void Delete (int id) { }
    }
}