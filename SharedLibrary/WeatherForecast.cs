using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace SharedLibrary;
public class WeatherForecast : IValidatableObject
{
    public DateTime Date { get; set; }

    [Range(0,50)]
    public int TemperatureC { get; set; }

    public int TemperatureF => 32 + (int)(TemperatureC / 0.5556);

    [MaxLength(10)]
    public string? Summary { get; set; }

    public IEnumerable<ValidationResult> Validate(ValidationContext validationContext)
    {
        if (Date.Year < 2010)
        {
            yield return new ValidationResult(
                $"Classic movies must have a release year no later than {2010}.",
                new[] { nameof(Date) });
        }

        if (TemperatureC < TemperatureF)
        {
            yield return new ValidationResult(
                $"Another error Temperature wise.");
        }
    }
}
