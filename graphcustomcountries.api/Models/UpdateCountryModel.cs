using System.ComponentModel.DataAnnotations;

namespace graphcustomcountries.api.Models
{
    public class UpdateCountryModel
    {
        [Required]
        public string Capital { get; set; }
        [Required]
        public decimal Area { get; set; }
        [Required]
        public int Population { get; set; }
        [Required]
        public decimal PopulationDensity { get; set; }
        [Required]
        public string UrlFlagImage { get; set; }
    }
}
