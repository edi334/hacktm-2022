using System.Data;
using Backend.Core.Services.Interfaces;
using Backend.Core.Utils;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Directory = Backend.Core.Entities.Directory;

namespace Backend.Api.Controllers;

[ApiController]
[Route("/api/directory")]
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
    public async Task<ActionResult> GoBack(int level)
    {
        var response = await _directoryService.GoBackwards(level);

        return Response(response);
    }

    [HttpGet("generate-box-position")]
    public async Task<ActionResult> GenerateBoxPosition()
    {
        var response = await _directoryService.GetAll();

        var boxExists = response.Item.Any(d => d.Title == "Box of Nothing");

        if (boxExists)
        {
            return BadRequest("Box already exists!");
        }

        Random random = new Random();
        var maxLevel = response.Item.Max(d => d.Level);

        int boxLevel = 0;

        while (boxLevel <= 1)
        {
            boxLevel = random.Next(0, maxLevel + 1);
        }
        
        var ids = response.Item
            .Where(d => d.Level == boxLevel - 1)
            .Select(d => d.Id.ToString())
            .ToList();
            
        var index = random.Next(ids.Count);
        var parentId = ids[index];
        
        var directory = new Directory
        {
            Title = "Box of Nothing",
            Level = boxLevel,
            ParentId = parentId
        };

        var boxResponse = await _directoryService.AddDirectory(directory);

        return Ok(boxResponse.Item);
    }
    
    [HttpDelete("delete-box")]
    public async Task<ActionResult> DeleteBox()
    {
        var response = await _directoryService.DeleteBox();

        if (response.HasErrors())
        {
            return BadRequest(response.GetErrors());
        }

        return Ok(response.Item);
    }

    private ActionResult Response(ActionResponse<List<Directory>> response)
    {
        if (response.HasErrors())
        {
            return BadRequest(response.GetErrors());
        }

        if (response.Item.Count == 0)
        {
            return new NotFoundResult();
        }

        return Ok(response.Item);
    }
}