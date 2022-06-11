using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Server.Core.Entities;
using Directory = Server.Core.Entities.Directory;

namespace Server.Core.Database;

public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
{
    public DbSet<Question> Questions { get; set; }
    
    public DbSet<Directory> Directories { get; set; }

    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
    {
        
    }
}