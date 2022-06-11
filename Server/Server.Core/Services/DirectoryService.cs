using Microsoft.EntityFrameworkCore;
using Server.Core.Database;
using Server.Core.Services.Interfaces;
using Server.Core.Utils;
using Directory = Server.Core.Entities.Directory;

namespace Server.Core.Services;

public class DirectoryService : IDirectoryService
{
    private readonly ApplicationDbContext _applicationDbContext;

    public DirectoryService(ApplicationDbContext applicationDbContext)
    {
        _applicationDbContext = applicationDbContext;
    }

    public async Task<ActionResponse<Directory>> AddDirectory(Directory directory)
    {
        var response = new ActionResponse<Directory>();

        var dbDirectory = await _applicationDbContext.AddAsync(directory);
        await _applicationDbContext.SaveChangesAsync();
        response.Item = dbDirectory.Entity;

        return response;
    }

    public async Task<ActionResponse<List<Directory>>> GoForth(Guid parentId, int level)
    {
        var directories = await _applicationDbContext
            .Directories
            .Where(d => d.ParentId.Equals(parentId.ToString()) && d.Level == level)
            .ToListAsync();

        var response = new ActionResponse<List<Directory>>
        {
            Item = directories
        };

        return response;
    }

    public async Task<ActionResponse<List<Directory>>> GoBackwards(Guid parentId, int level)
    {
        var directories = await _applicationDbContext
            .Directories
            .Where(d => d.Id == parentId && d.Level == level)
            .ToListAsync();

        var response = new ActionResponse<List<Directory>>
        {
            Item = directories
        };

        return response;
    }
}