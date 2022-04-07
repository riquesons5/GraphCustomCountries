namespace graphcustomcountries.api.Models
{
    public class UpdateCountryModel
    {
        public string Capital { get; set; }
        public decimal Area { get; set; }
        public int Population { get; set; }
        public decimal PopulationDensity { get; set; }
        public string UrlFlagImage { get; set; }
    }
}
