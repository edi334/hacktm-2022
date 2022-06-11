using Microsoft.AspNetCore.Authorization;
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
    [HttpGet]
    public async Task<IActionResult> GetQuestions()
    {
        var response = await _questionService.GetQuestions();
    
        return Ok(response.Item);
    }


    [HttpPost]
    public async Task<IActionResult> AddQuestion([FromBody] Question question)
    {
        var response = await _questionService.AddQuestion(question);
        if (response.HasErrors())
        {
            return BadRequest(response.Errors);
        }

        return Ok(((ActionResponse<Question>) response).Item);
    }

    [HttpDelete]
    public async Task<IActionResult> RemoveQuestion(Guid id)
    {
        var response = await _questionService.RemoveQuestion(id);
        if (response.HasErrors())
        {
            return BadRequest(response.Errors);
        }

        return Ok(((ActionResponse<Question>)response).Item);
    }

    [HttpPut("update-to-normal")]
    public async Task<IActionResult> UpdateToNormalQuestion(Guid id, string questionText, string answer)
    {
        var response = await _questionService.UpdateQuestion(id, questionText, answer);
        if (response.HasErrors())
        {
            return BadRequest(response.Errors);
        }

        return Ok(((ActionResponse<Question>) response).Item);
    }

    [HttpPut("update-to-grill")]
    public async Task<IActionResult> UpdateToGrillQuestion(Guid id, string questionText, string answer,
        string option1, string option2, string option3)
    {
        var response = await _questionService.UpdateToGrillQuestion(id, questionText, answer, option1, option2, option3);
        if (response.HasErrors())
        {
            return BadRequest(response.Errors);
        }

        return Ok(((ActionResponse<Question>) response).Item);
        
        
    }
}