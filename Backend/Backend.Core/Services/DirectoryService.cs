using Backend.Core.Database;
using Backend.Core.Services.Interfaces;
using Backend.Core.Utils;
using Microsoft.EntityFrameworkCore;
using Directory = Backend.Core.Entities.Directory;

namespace Backend.Core.Services;

public class DirectoryService : IDirectoryService
{
    private readonly ApplicationDbContext _applicationDbContext;

    public DirectoryService(ApplicationDbContext applicationDbContext)
    {
        _applicationDbContext = applicationDbContext;
    }

    public async Task<ActionResponse<List<Directory>>> GetAll()
    {
        var response = new ActionResponse<List<Directory>>();

        var directories = await _applicationDbContext.Directories.ToListAsync();
        response.Item = directories;

        return response;
    }

    public async Task<ActionResponse<Directory>> AddDirectory(Directory directory)
    {
        var response = new ActionResponse<Directory>();

        var dbDirectory = await _applicationDbContext.AddAsync(directory);
        await _applicationDbContext.SaveChangesAsync();
        response.Item = dbDirectory.Entity;

        return response;
    }

    public async Task<ActionResponse<List<Directory>>> GoForth(string parentId, int level)
    {
        var directories = await _applicationDbContext
            .Directories
            .Where(d => d.ParentId.Equals(parentId) && d.Level == level)
            .ToListAsync();

        var response = new ActionResponse<List<Directory>>
        {
            Item = directories
        };

        return response;
    }

    public async Task<ActionResponse<List<Directory>>> GoBackwards(string parentId, int level)
    {
        var directories = await _applicationDbContext
            .Directories
            .Where(d => d.Id.ToString().Equals(parentId) && d.Level == level)
            .ToListAsync();

        var response = new ActionResponse<List<Directory>>
        {
            Item = directories
        };

        return response;
    }
}