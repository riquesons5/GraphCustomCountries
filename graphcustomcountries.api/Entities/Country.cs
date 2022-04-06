using System;

namespace graphcustomcountries.api.Entities
{
    public class Country
    {
        public Country(string name, string capital, decimal area, decimal population, decimal demographicDensity)
        {
            Name = name;
            Capital = capital;
            Area = area;
            Population = population;
            DemographicDensity = demographicDensity;

            CreatedAt = DateTime.Now;
            UpdatedAt = DateTime.Now;
        }

        public int Id { get; private set; }
        public string Name { get; private set; }
        public string Capital { get; private set; }
        public decimal Area { get; private set; }
        public decimal Population { get; private set; }
        public decimal DemographicDensity { get; private set; }
        public DateTime CreatedAt { get; private set; }
        public DateTime UpdatedAt { get; private set; }

        public void Update(string capital, decimal area, decimal population, decimal demographicDensity)
        {
            Capital = capital;
            Area = area;
            Population = population;
            DemographicDensity = demographicDensity;

            UpdatedAt = DateTime.Now;
        }
    }
}
