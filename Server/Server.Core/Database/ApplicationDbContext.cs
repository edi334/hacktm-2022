using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Server.Core.Entities;

namespace Server.Core.Database;

public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
{
    public DbSet<Question> Questions { get; set; }
    
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
    {
        
    }
}