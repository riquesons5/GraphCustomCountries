﻿using Microsoft.AspNetCore.Mvc;

namespace graphcustomcountries.api.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class ProjectPathController : ControllerBase
    {
        const string URL_PROJECT = "https://github.com/riquesons5/GraphCustomCountries";

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(URL_PROJECT);
        }
    }
}
