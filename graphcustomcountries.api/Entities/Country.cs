using Newtonsoft.Json;
using System;

namespace graphcustomcountries.api.Entities
{
    public class Country
    {
        public Country(string name, string capital, decimal area, int population, decimal populationDensity, string urlFlagImage)
        {
            Name = name;
            Capital = capital;
            Area = area;
            Population = population;
            PopulationDensity = populationDensity;
            UrlFlagImage = urlFlagImage;
            CreatedAt = DateTime.Now;
            UpdatedAt = DateTime.Now;

            JsonData = SerializeData(this);
        }

        public int Id { get; private set; }
        public string Name { get; private set; }
        public string Capital { get; private set; }
        public decimal Area { get; private set; }
        public int Population { get; private set; }
        public decimal PopulationDensity { get; private set; }
        public string UrlFlagImage { get; private set; }
        public string JsonData { get; private set; }
        public DateTime CreatedAt { get; private set; }
        public DateTime UpdatedAt { get; private set; }

        public void Update(string capital, decimal area, int population, decimal populationDensity, string urlFlagImage)
        {
            Capital = capital;
            Area = area;
            Population = population;
            PopulationDensity = populationDensity;
            UrlFlagImage = urlFlagImage;
            UpdatedAt = DateTime.Now;

            JsonData = SerializeData(this);
        }

        private string SerializeData(Country country)
        {
            return JsonConvert.SerializeObject(country);
        }
    }
}
