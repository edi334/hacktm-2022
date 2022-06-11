using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Server.Core.Database;
using Server.Core.Entities;
using Server.Core.Services.Interfaces;
using Server.Core.Utils;

namespace Server.Core.Services;

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

        response.Item = questions;
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