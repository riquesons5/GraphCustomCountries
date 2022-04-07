using System;

namespace graphcustomcountries.api.Entities
{
    public class Country
    {
        public Country(string name, string capital, decimal area, int population, decimal populationDensity)
        {
            Name = name;
            Capital = capital;
            Area = area;
            Population = population;
            PopulationDensity = populationDensity;

            CreatedAt = DateTime.Now;
            UpdatedAt = DateTime.Now;
        }

        public int Id { get; private set; }
        public string Name { get; private set; }
        public string Capital { get; private set; }
        public decimal Area { get; private set; }
        public int Population { get; private set; }
        public decimal PopulationDensity { get; private set; }
        public DateTime CreatedAt { get; private set; }
        public DateTime UpdatedAt { get; private set; }

        public void Update(string capital, decimal area, int population, decimal populationDensity)
        {
            Capital = capital;
            Area = area;
            Population = population;
            PopulationDensity = populationDensity;

            UpdatedAt = DateTime.Now;
        }
    }
}
