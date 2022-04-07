using graphcustomcountries.api.Entities;
using Microsoft.EntityFrameworkCore;

namespace graphcustomcountries.api.Data
{
    public class AppDbContext : DbContext
    {
        public DbSet<Country> Countries { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
            => optionsBuilder.UseSqlite("DataSource=app.db;Cache=Shared");
    }
}
