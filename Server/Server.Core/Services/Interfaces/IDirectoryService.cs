using Server.Core.Utils;
using Directory = Server.Core.Entities.Directory;

namespace Server.Core.Services.Interfaces;

public interface IDirectoryService
{
    Task<ActionResponse<Directory>> AddDirectory(Directory directory);
    Task<ActionResponse<List<Directory>>> GoForth(Guid parentId, int level);
    Task<ActionResponse<List<Directory>>> GoBackwards(Guid parentId, int level);
}