using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Backend.Core.Migrations
{
    public partial class AddedAnswersCountToUser : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "CorrectAnswers",
                table: "AspNetUsers",
                type: "integer",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CorrectAnswers",
                table: "AspNetUsers");
        }
    }
}
