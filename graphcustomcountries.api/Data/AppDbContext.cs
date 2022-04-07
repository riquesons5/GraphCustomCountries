using graphcustomcountries.api.Entities;
using Microsoft.EntityFrameworkCore;

namespace graphcustomcountries.api.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options): base(options)
        {
        }
        public DbSet<Country> Countries { get; set; }
    }
}
