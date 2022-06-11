using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Server.Core.Services.Interfaces;
using Server.Core.Utils;
using Directory = Server.Core.Entities.Directory;

namespace Server.Controllers;

[ApiController]
[Route("/api/directory")]
[Authorize(Roles = "User,Admin", AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
public class DirectoryController : ControllerBase
{
    private readonly IDirectoryService _directoryService;

    public DirectoryController(IDirectoryService directoryService)
    {
        _directoryService = directoryService;
    }

    [HttpPost]
    public async Task<ActionResult> Add([FromBody] Directory directory)
    {
        var response =  await _directoryService.AddDirectory(directory);

        if (response.HasErrors())
        {
            return BadRequest(response.GetErrors());
        }

        return Ok(response.Item);
    }

    [HttpGet("next-level")]
    public async Task<ActionResult> GoToNextLevel(string parentId, int level)
    {
        var response = await _directoryService.GoForth(parentId, level);

        return Response(response);
    }

    [HttpGet("go-back")]
    public async Task<ActionResult> GoBack(Guid parentId, int level)
    {
        var response = await _directoryService.GoBackwards(parentId.ToString(), level);

        return Response(response);
    }

    private ActionResult Response(ActionResponse<List<Directory>> response)
    {
        if (response.HasErrors())
        {
            return BadRequest(response.GetErrors());
        }

        return Ok(response.Item);
    }
}