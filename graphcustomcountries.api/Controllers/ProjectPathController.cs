using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace graphcustomcountries.api.Controllers
{
    [AllowAnonymous]
    [Route("[controller]")]
    [ApiController]
    public class ProjectPathController : ControllerBase
    {
        const string URL_PROJECT = "https://github.com/riquesons5/GraphCustomCountries";

        // GET api/projectpath
        /// <summary>
        /// Retorna o link do projeto no GitHub com o código fonte
        /// </summary>
        /// <returns>Recuperar url do projeto</returns>
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(URL_PROJECT);
        }
    }
}
