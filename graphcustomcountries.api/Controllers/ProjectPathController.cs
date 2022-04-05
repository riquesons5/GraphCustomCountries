using Microsoft.AspNetCore.Mvc;

namespace graphcustomcountries.api.Controllers
{
    [Route("projectpath")]
    [ApiController]
    public class ProjectPathController: ControllerBase
    {
        public ProjectPathController()
        {
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok("https://github.com/riquesons5/GraphCustomCountries");
        }
    }
}
