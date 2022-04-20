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

        // GET api/Country
        /// <summary>
        /// Recupera todos os países da base de dados
        /// </summary>
        /// <returns>Lista de países</returns>
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

        // GET api/Country/{id}
        /// <summary>
        /// Recupera apenas um país através do identificador
        /// </summary>
        /// <param name="id">Identificador do país</param>
        /// <returns>País</returns>
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

        // POST api/Country
        /// <summary>
        /// Cadastra um novo país
        /// </summary>
        /// <remarks>
        ///{
        ///"name": "nome do país",
        ///"capital": "capital do país",
        ///"area": "area em km²",
        ///"population": "quantidade estimada da população",
        ///"populationdensity": "densidade demográfica do país"
        ///"urlflagimage": "url contendo a imagem com a bandeira do país"
        ///}
        /// </remarks>
        /// <returns>Objeto recém-criado</returns>
        /// <response code="201">Sucesso</response>
        /// <response code="400">Dados inválidos</response>
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

        // PUT api/Country/{id}
        /// <summary>
        /// Atualiza um país de acordo com o identificador
        /// </summary>
        /// <remarks>
        ///{
        ///"capital": "capital do país",
        ///"area": "area em km²",
        ///"population": "quantidade estimada da população",
        ///"populationdensity": "densidade demográfica do país"
        ///"urlflagimage": "url contendo a imagem com a bandeira do país"
        ///}
        /// </remarks>
        /// <param name="id">Identificador do país</param>
        /// <param name="model">Dados do país</param>
        /// <returns>Sem conteúdo.</returns>
        /// <response code="204">Sem conteúdo</response>
        /// <response code="404">Não encontrado</response>
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
