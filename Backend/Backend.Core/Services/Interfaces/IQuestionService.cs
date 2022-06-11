using Backend.Core.Entities;
using Backend.Core.Utils;

namespace Backend.Core.Services.Interfaces;

public interface IQuestionService
{
    Task<ActionResponse<List<Question>>> GetQuestions();
    Task<ActionResponse> AddQuestion(Question question);
    Task<ActionResponse> RemoveQuestion(Guid id);
    Task<ActionResponse> UpdateQuestion(Guid id, string questionText, string answer);
    Task<ActionResponse> UpdateToGrillQuestion(Guid id, string questionText, string answer, string option1, string option2, string option3);
    
}