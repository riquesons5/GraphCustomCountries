namespace graphcustomcountries.api.Models
{
    public class AddCountryModel
    {
        public string Name { get; set; }
        public string Capital { get; set; }
        public decimal Area { get; set; }
        public decimal Population { get; set; }
        public decimal DemographicDensity { get; set; }
    }
}
