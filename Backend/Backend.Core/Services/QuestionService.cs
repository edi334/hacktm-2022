

using Backend.Core.Database;
using Backend.Core.Entities;
using Backend.Core.Services.Interfaces;
using Backend.Core.Utils;
using Microsoft.EntityFrameworkCore;

namespace Backend.Core.Services;

public class QuestionService : IQuestionService
{
    private readonly ApplicationDbContext _context;

    public QuestionService(ApplicationDbContext context)
    {
        _context = context;
    }
    
    public async Task<ActionResponse<List<Question>>> GetQuestions()
    {
        var response = new ActionResponse<List<Question>>();
        var questions = await _context.Questions.ToListAsync();
        var randomQuestions = questions.OrderBy(x => Guid.NewGuid()).Take(5).ToList();
        
        response.Item = randomQuestions;
        return response;
    }

    public async Task<ActionResponse> AddQuestion(Question question)
    {
        var response = new ActionResponse<Question>();
        var dbStatus = await _context.Questions.AddAsync(question);

        await _context.SaveChangesAsync();

        response.Item = dbStatus.Entity;

        return response;
    }

    public async Task<ActionResponse> RemoveQuestion(Guid id)
    {
        var response = new ActionResponse<Question>();
        var questionToDelete = await _context.Questions.FirstOrDefaultAsync(x => x.Id == id);
        if (questionToDelete is null)
        {
            response.AddError("Question doesn't exist");
            return response;
        }

        _context.Questions.Remove(questionToDelete);
        await _context.SaveChangesAsync();
        
        response.Item = questionToDelete;
        return response;
    }
    
    public async Task<ActionResponse> UpdateQuestion(Guid id, string questionText, string answer)
    {
        var response = new ActionResponse<Question>();
        var questionToReplace = await _context.Questions.FirstOrDefaultAsync(x => x.Id == id);
        
        if (questionToReplace is null)
        {
            response.AddError("Question doesn't exist");
            return response;
        }
        
        questionToReplace.QuestionText = questionText;
        questionToReplace.Answer = answer;
        questionToReplace.IsGrill = false;
        
        await _context.SaveChangesAsync();
        response.Item = questionToReplace;
        return response;
    }
    
    public async Task<ActionResponse> UpdateToGrillQuestion(Guid id, string questionText, string answer, string option1, string option2, string option3)
    {
        var response = new ActionResponse<Question>();
        var questionToReplace = await _context.Questions.FirstOrDefaultAsync(x => x.Id == id);
        
        if (questionToReplace is null)
        {
            response.AddError("Question doesn't exist");
            return response;
        }
        
        questionToReplace.QuestionText = questionText;
        questionToReplace.Answer = answer;
        questionToReplace.IsGrill = true;
        questionToReplace.Option1 = option1;
        questionToReplace.Option2 = option2;
        questionToReplace.Option3 = option3;
        
        await _context.SaveChangesAsync();
        response.Item = questionToReplace;
        return response;
    }
}