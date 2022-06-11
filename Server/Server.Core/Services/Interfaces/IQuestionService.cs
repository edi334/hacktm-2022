using System.Security.Cryptography.X509Certificates;
using Server.Core.Entities;
using Server.Core.Utils;

namespace Server.Core.Services.Interfaces;

public interface IQuestionService
{
    Task<ActionResponse<List<Question>>> GetQuestions();
    Task<ActionResponse> AddQuestion(Question question);
    Task<ActionResponse> RemoveQuestion(Guid id);
    Task<ActionResponse> UpdateQuestion(Guid id, string questionText, string answer);
    Task<ActionResponse> UpdateToGrillQuestion(Guid id, string questionText, string answer, string option1, string option2, string option3);
    
}