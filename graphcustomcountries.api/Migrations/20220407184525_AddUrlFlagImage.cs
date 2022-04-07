using Microsoft.EntityFrameworkCore.Migrations;

namespace graphcustomcountries.api.Migrations
{
    public partial class AddUrlFlagImage : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "UrlFlagImage",
                table: "Countries",
                type: "TEXT",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "UrlFlagImage",
                table: "Countries");
        }
    }
}
