using System.ComponentModel.DataAnnotations;

namespace Backend.Core.Utils;

public class RegisterRequest
{
    [Required]
    [DataType(DataType.EmailAddress)]
    public string Email { get; set; }
        
    [Required]
    [DataType(DataType.Password)]
    [MinLength(6)]
    public string Password { get; set; }
        
    [Required]
    [DataType(DataType.Password)]
    [MinLength(6)]
    public string ConfirmPassword { get; set; }
        
    [Required]
    public string FirstName { get; set; }
        
    [Required]
    public string LastName { get; set; }
    public string PhoneNumber { get; set; }
}