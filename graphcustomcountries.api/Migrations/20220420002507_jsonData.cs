using Microsoft.EntityFrameworkCore.Migrations;

namespace graphcustomcountries.api.Migrations
{
    public partial class jsonData : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "JsonData",
                table: "Countries",
                type: "TEXT",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "JsonData",
                table: "Countries");
        }
    }
}
