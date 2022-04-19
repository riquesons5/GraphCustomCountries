using graphcustomcountries.api.Data.Repositories;
using graphcustomcountries.api.Entities;
using graphcustomcountries.api.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;

namespace graphcustomcountries.api.Controllers
{
    //[Authorize]
    [Route("[controller]")]
    [ApiController]
    public class CountryController : ControllerBase
    {
        private readonly ICountryRepository _repCountry;
        public CountryController(ICountryRepository repCountry)
        {
            _repCountry = repCountry;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            try
            {
                var countries = _repCountry.GetAll();
                return Ok(countries);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            try
            {
                var countries = _repCountry.GetById(id);

                if (countries == null)
                    return NotFound();

                return Ok(countries);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpPost]
        public IActionResult Post(AddCountryModel model)
        {
            try
            {
                var record = _repCountry.GetByName(model.Name);
                if(record != null)
                    throw new Exception("Já existe um país com o mesmo nome cadastrado.");
                    
                var country = new Country(
                    model.Name,
                    model.Capital,
                    model.Area,
                    model.Population,
                    model.PopulationDensity,
                    model.UrlFlagImage
                );

                _repCountry.Add(country);

                return CreatedAtAction("GetById", new { Id = country.Id } ,country);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, UpdateCountryModel model)
        {
            try
            {
                var country = _repCountry.GetById(id);

                if (country == null)
                    return NotFound();

                country.Update(
                    model.Capital, 
                    model.Area, 
                    model.Population, 
                    model.PopulationDensity, 
                    model.UrlFlagImage
                );

                _repCountry.Update(country);

                return NoContent();
            }
            catch(Exception e)
            {
                return BadRequest(e.Message);
            }
        }
    }
}
