using graphcustomcountries.api.Entities;
using System.Collections.Generic;
using System.Linq;

namespace graphcustomcountries.api.Data.Repositories
{
    public class CountryRepository : ICountryRepository
    {
        private readonly AppDbContext _context;

        public CountryRepository(AppDbContext context)
        {
            _context = context;
        }

        void ICountryRepository.Add(Country country)
        {
            _context.Countries.Add(country);
            _context.SaveChanges();
        }

        List<Country> ICountryRepository.GetAll()
        {
            return _context.Countries.ToList();
        }

        Country ICountryRepository.GetById(int id)
        {
            return _context.Countries.SingleOrDefault(c => c.Id == id);
        }

        void ICountryRepository.Update(Country jobVacancy)
        {
            _context.Countries.Update(jobVacancy);
            _context.SaveChanges();
        }
    }
}
