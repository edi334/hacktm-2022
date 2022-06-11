using System.ComponentModel.DataAnnotations;

namespace Server.Core.Entities;

public class Directory
{
    [Key]
    public Guid Id { get; set; }
    
    public string Title { get; set; }
    
    public int Level { get; set; }
    
    public string ParentId { get; set; }
}