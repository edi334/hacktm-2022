namespace Backend.Core.Entities;

public class Question
{
    public Guid Id { get; set; }
    public string QuestionText { get; set; }
    public string Answer { get; set; }
    public bool IsGrill { get; set; }
    public string? Option1 { get; set; }
    public string? Option2 { get; set; }
    public string? Option3 { get; set; }
}