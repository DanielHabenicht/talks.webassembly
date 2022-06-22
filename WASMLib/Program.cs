using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using DotNetJS;
using Microsoft.JSInterop;
using SharedLibrary;

namespace WASMLib;

public partial class Program
{
    // Entry point is invoked by the JavaScript runtime on boot.
    public static void Main()
    {
        // Invoking 'dotnet.HelloWorld.GetHostName()' JavaScript function.
        var hostName = GetHostName();
        // Writing to JavaScript host console.
        Console.WriteLine($"Hello {hostName}, DotNet here!");
    }

    [JSFunction] // The interoperability code is auto-generated.
    public static partial string GetHostName();

    [JSInvokable] // The method is invoked from JavaScript.
    public static string GetName() => "DotNet";


    [JSInvokable] // The method is invoked from JavaScript.
    public static List<ValidationResult> Validate(WeatherForecast forecast)
    {
        var context = new ValidationContext(forecast, serviceProvider: null, items: null);
        var validationResults = new List<ValidationResult>();

        bool isValid = Validator.TryValidateObject(forecast, context, validationResults, true);
        return validationResults;
    }
}