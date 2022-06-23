using Microsoft.AspNetCore.Mvc;
using System.ComponentModel.DataAnnotations;
using SharedLibrary;

namespace WebAssemblyDemo.Controllers;

[ApiController]
[Route("[controller]")]
public class UserController : ControllerBase
{
    private static readonly string[] Summaries = new[]
    {
        "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
    };

    private readonly ILogger<UserController> _logger;

    public UserController(ILogger<UserController> logger)
    {
        _logger = logger;
    }

    // [HttpGet]
    // public IEnumerable<WeatherForecast> Get()
    // {
    //     return Enumerable.Range(1, 5).Select(index => new WeatherForecast
    //     {
    //         Date = DateTime.Now.AddDays(index),
    //         TemperatureC = Random.Shared.Next(-20, 55),
    //         Summary = Summaries[Random.Shared.Next(Summaries.Length)]
    //     })
    //     .ToArray();
    // }

    [HttpPost]
    public List<ValidationResult> Post([FromBody] User user)
    {
        var context = new ValidationContext(user, serviceProvider: null, items: null);
        var validationResults = new List<ValidationResult>();
        Thread.Sleep(300);

        bool isValid = Validator.TryValidateObject(user, context, validationResults);
        return validationResults;
    }
}
