using Backend.Core.Utils;
using Directory = Backend.Core.Entities.Directory;

namespace Backend.Core.Services.Interfaces;

public interface IDirectoryService
{
    Task<ActionResponse<List<Directory>>> GetAll();
    Task<ActionResponse<Directory>> DeleteBox();
    Task<ActionResponse<Directory>> AddDirectory(Directory directory);
    Task<ActionResponse<List<Directory>>> GoForth(string parentId, int level);
    Task<ActionResponse<List<Directory>>> GoBackwards(int level);
}