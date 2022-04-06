using graphcustomcountries.api.Models;
using Microsoft.AspNetCore.Mvc;

namespace graphcustomcountries.api.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class CountryController : ControllerBase
    {
        public CountryController()
        {
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            return Ok();
        }

        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            return Ok();
        }

        [HttpPost]
        public IActionResult Post(AddCountryModel model)
        {
            return Ok();
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, UpdateCountryModel model)
        {
            return NoContent();
        }
    }
}
