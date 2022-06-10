
using Server.Core.Utils;

namespace Server.Core.Services.Interfaces;


public interface IIdentityService
{
    Task<ActionResponse> Login(LoginRequest request);
    Task<ActionResponse<string>> Register(RegisterRequest request, string role);    
}