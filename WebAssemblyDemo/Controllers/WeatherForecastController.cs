using Microsoft.AspNetCore.Mvc;
using System.ComponentModel.DataAnnotations;
using SharedLibrary;

namespace WebAssemblyDemo.Controllers;

[ApiController]
[Route("[controller]")]
public class WeatherForecastController : ControllerBase
{
    private static readonly string[] Summaries = new[]
    {
        "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
    };

    private readonly ILogger<WeatherForecastController> _logger;

    public WeatherForecastController(ILogger<WeatherForecastController> logger)
    {
        _logger = logger;
    }

    [HttpGet]
    public IEnumerable<WeatherForecast> Get()
    {
        return Enumerable.Range(1, 5).Select(index => new WeatherForecast
        {
            Date = DateTime.Now.AddDays(index),
            TemperatureC = Random.Shared.Next(-20, 55),
            Summary = Summaries[Random.Shared.Next(Summaries.Length)]
        })
        .ToArray();
    }

    [HttpPost]
    public List<ValidationResult> Post([FromBody] WeatherForecast weatherForecast)
    {
        var context = new ValidationContext(weatherForecast, serviceProvider: null, items: null);
        var validationResults = new List<ValidationResult>();


        bool isValid = Validator.TryValidateObject(weatherForecast, context, validationResults);
        return validationResults;
    }
}
