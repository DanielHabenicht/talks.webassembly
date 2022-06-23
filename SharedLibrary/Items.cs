using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace SharedLibrary;
public class Items : IValidatableObject
{
    public string Name {get; set;}
    public int Size {get; set; }

    public IEnumerable<ValidationResult> Validate(ValidationContext validationContext)
    {
        if (false){
            yield return new ValidationResult(
                $"All items in the Backpack need to be unique .");
        }
    }
}