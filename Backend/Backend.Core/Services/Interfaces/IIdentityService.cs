using Backend.Core.Utils;

namespace Backend.Core.Services.Interfaces;


public interface IIdentityService
{
    Task<ActionResponse> Login(LoginRequest request);
    Task<ActionResponse<string>> Register(RegisterRequest request);    
}