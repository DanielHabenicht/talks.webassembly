using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace SharedLibrary;
public class User : IValidatableObject
{
    public string Name {get; set;}
    public DateTime Birthdate { get; set; }
    public DateTime FirstJobDate { get; set; }
    public List<Items> Backpack {get; set; }

    public IEnumerable<ValidationResult> Validate(ValidationContext validationContext)
    {
        
        if (Birthdate > FirstJobDate)
        {
            yield return new ValidationResult(
                $"Birthdate must be earlier than FirstJobDate.");
        }

        if (Backpack.Aggregate(0, (agg, item) => agg + item.Size) > 12)
        {
            yield return new ValidationResult(
                $"Backpack is full (Aggregates size can't be more than 12).");
        }

        if (Backpack.Count > 5)
        {
            yield return new ValidationResult(
                $"No more than 5 items are allowed.");
        }
        var hs = new HashSet<Items>();
        if(Backpack.All(hs.Add)){
            yield return new ValidationResult(
                $"All items in the Backpack need to be unique .");
        }

        if(Backpack.Where(i => i.Name.Contains(Name)).Count() > 0){
            yield return new ValidationResult(
                $"Items can't contain yourself.");
        }

    }
}
