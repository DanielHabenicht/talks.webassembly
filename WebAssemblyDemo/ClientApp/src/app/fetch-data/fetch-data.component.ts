import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LibWasmService } from '../lib-wasm.service';
import { FormGroup, FormControl } from '@angular/forms';
import { SharedLibrary } from 'src/assets/lib-wasm/dotnet';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent {
  public forecasts: SharedLibrary.WeatherForecast[] = [];
  public model: any = {
    "Date": "2000-06-21T18:09:12.4118217+00:00",
    "TemperatureC": -1,
    "TemperatureF": 44,
    "Summary": "Scorching"
}


  formFields: FormField[] = [
    {
        "fieldName": "Date",
        "fieldType": "text",
    },
    {
        "fieldName": "TemperatureC",
        "fieldType": "number",
    },
    {
        "fieldName": "TemperatureF",
        "fieldType": "number",
    },
    {
        "fieldName": "Summary",
        "fieldType": "text",
    }
]
  form = new FormGroup({} as any);
  performance: any = {}

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string, private wasmService: LibWasmService) {
    http.get<SharedLibrary.WeatherForecast[]>(baseUrl + 'weatherforecast').subscribe(result => {
      this.forecasts = result;
    }, error => console.error(error));
  }



  public validate(){
    var apiStartTime = performance.now()
    this.http.post<SharedLibrary.WeatherForecast[]>(this.baseUrl + 'weatherforecast', this.form.getRawValue()).subscribe(result => {
        var stopTime = performance.now()
        this.performance.api = stopTime - apiStartTime;


      }, error => {
        var stopTime = performance.now()
        this.performance.api = stopTime - apiStartTime;
        });


    var startTime = performance.now()
    var newModelState = {...this.form.value,
        "TemperatureC": parseInt(this.form.value.TemperatureC),
    "TemperatureF": parseInt(this.form.value.TemperatureF),
    }
    var validationResult = this.wasmService.validateModel(newModelState)
    var stopTime = performance.now()
    this.performance.wasm = stopTime - startTime;
    console.log(validationResult)
    for(let result of validationResult){
        if(result.memberNames.length > 0){
            this.form.controls[result.memberNames[0]].setErrors({'incorrect': true,'error': result.errorMessage})
        }else {
            this.form.setErrors({'error': result.errorMessage})
        }
    }
  }



  ngOnInit(): void {
    for (const formField of this.formFields) {
      this.form.addControl(formField.fieldName, new FormControl(null));
    }
    this.form.setValue(this.model)
  }

  onSubmit(): void {
    if (this.form.valid) {
      let value = this.form.value;
    }
  }

  getErrorForFormField(formFieldString: string){
    var formField = this.form.get(formFieldString)
    if(formField && formField.errors){
      return formField.errors.error
    }
    return '';
  }

}

interface FormField {
    fieldName: string;
    fieldType: string;
}
