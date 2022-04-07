using Microsoft.EntityFrameworkCore.Migrations;

namespace graphcustomcountries.api.Migrations
{
    public partial class updateColumns : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "DemographicDensity",
                table: "Countries",
                newName: "PopulationDensity");

            migrationBuilder.AlterColumn<int>(
                name: "Population",
                table: "Countries",
                type: "INTEGER",
                nullable: false,
                oldClrType: typeof(decimal),
                oldType: "TEXT");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "PopulationDensity",
                table: "Countries",
                newName: "DemographicDensity");

            migrationBuilder.AlterColumn<decimal>(
                name: "Population",
                table: "Countries",
                type: "TEXT",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "INTEGER");
        }
    }
}
