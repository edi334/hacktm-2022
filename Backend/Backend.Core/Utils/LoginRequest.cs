using System.ComponentModel.DataAnnotations;

namespace Backend.Core.Utils;

public class LoginRequest
{
    [Required]
    [DataType(DataType.EmailAddress)]
    public string Email { get; set; }

    [Required] [MinLength(6)] public string Password { get; set; }
}