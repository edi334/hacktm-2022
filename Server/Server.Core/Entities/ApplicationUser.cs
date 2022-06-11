using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Identity;

namespace Server.Core.Entities;

public class ApplicationUser : IdentityUser
{
    public string FirstName { get; set; }
    public string LastName { get; set; }
}