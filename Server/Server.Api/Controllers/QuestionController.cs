using Microsoft.AspNetCore.Mvc;
using Server.Core.Entities;
using Server.Core.Services.Interfaces;
using Server.Core.Utils;

namespace Server.Controllers;
[Route("api/[controller]")]
[ApiController]
public class QuestionController : ControllerBase
{
    private readonly IQuestionService _questionService;

    public QuestionController(IQuestionService questionService)
    {
        _questionService = questionService;
    }
    [HttpGet("getQuestions")]
    public async Task<IActionResult> GetQuestions()
    {
        var response = await _questionService.GetQuestions();
    
        return Ok(response.Item);
    }


    [HttpPost("addQuestion")]
    public async Task<IActionResult> AddQuestion([FromBody] Question question)
    {
        var response = await _questionService.AddQuestion(question);
        if (response.HasErrors())
        {
            return BadRequest(response.Errors);
        }

        return Ok(((ActionResponse<Question>) response).Item);
    }

    [HttpDelete("removeQuestion")]
    public async Task<IActionResult> RemoveQuestion(Guid id)
    {
        var response = await _questionService.RemoveQuestion(id);
        if (response.HasErrors())
        {
            return BadRequest(response.Errors);
        }

        return Ok(((ActionResponse<Question>)response).Item);
    }

    [HttpPut("updateToNormalQuestion")]
    public async Task<IActionResult> UpdateToNormalQuestion(Guid id, string questionText, string answer, bool isGrill)
    {
        var response = await _questionService.UpdateQuestion(id, questionText, answer, isGrill);
        if (response.HasErrors())
        {
            return BadRequest(response.Errors);
        }

        return Ok(((ActionResponse<Question>) response).Item);
    }

    [HttpPut("updateToGrillQuestion")]
    public async Task<IActionResult> UpdateToGrillQuestion(Guid id, string questionText, string answer, bool isGrill,
        string option1, string option2, string option3)
    {
        var response = await _questionService.UpdateToGrillQuestion(id, questionText, answer, isGrill, option1, option2, option3);
        if (response.HasErrors())
        {
            return BadRequest(response.Errors);
        }

        return Ok(((ActionResponse<Question>) response).Item);
        
        
    }
}