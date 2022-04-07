using graphcustomcountries.api.Entities;
using System.Collections.Generic;

namespace graphcustomcountries.api.Data.Repositories
{
    public interface ICountryRepository
    {
        void Add(Country country);
        List<Country> GetAll();
        Country GetById(int id);
        void Update(Country jobVacancy);

    }
}
