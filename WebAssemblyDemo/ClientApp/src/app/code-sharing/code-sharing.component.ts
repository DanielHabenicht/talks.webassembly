import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LibWasmService } from '../lib-wasm.service';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms';
import { SharedLibrary } from 'src/assets/lib-wasm/dotnet';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-code-sharing',
  templateUrl: './code-sharing.component.html',
  styleUrls: ['code-sharing.component.css']
})
export class FetchDataComponent {

  public useAPI: boolean = true;

  public model: SharedLibrary.User = {
    name: "Daniel",
    birthdate: new Date("2000-06-21T18:09:12.4118217+00:00"),
    firstJobDate: new Date("2000-06-21T18:09:12.4118217+00:00"),
    backpack: []

}


  formFields: FormField[] = [
    {
        "fieldName": "name",
        "fieldType": "text",
    },
    {
        "fieldName": "birthdate",
        "fieldType": "date",
    },
    {
        "fieldName": "firstJobDate",
        "fieldType": "date",
    },
    {
        "fieldName": "backpack",
        "fieldType": "array",
    }
]
  form = new FormGroup({} as any);
  performance: any = {}

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string, private wasmService: LibWasmService, private fb: FormBuilder) {
  }

  get backpackItems(): FormArray{
    return this.form.get('backpack') as FormArray;
  }

  get backpackItemControls(): Array<FormGroup>{
    return this.backpackItems.controls as FormGroup[];
  }

  addBackpackItem() {
    this.backpackItems.push(this.createBackpackItem());
  }

  createBackpackItem():FormGroup{
    return this.fb.group({
      name:[""],
      size:[0]
    })
  }


  public validate(){
    var apiStartTime = performance.now()
    this.http.post<any>(this.baseUrl + 'user', this.form.getRawValue()).subscribe(validationResult => {
        var stopTime = performance.now()
        this.performance.api = stopTime - apiStartTime;
        if(this.useAPI){
          this.applyValidationResult(validationResult)
        }

      }, (error) => {
        var stopTime = performance.now()
        this.performance.api = stopTime - apiStartTime;
      });


    var startTime = performance.now()
    var newModelState = {...this.form.value,
      "birthdate": new Date(this.form.value.birthdate),
      "firstJobDate": new Date(this.form.value.firstJobDate),
      backpack: this.form.value.backpack.map((item: any) => {
        return {
          name: item.name,
          size: item.size ?? 0
        }
      })
    }
    this.wasmService.validateModel(newModelState).subscribe(validationResult => {
      var stopTime = performance.now()
      this.performance.wasm = stopTime - startTime;
      // console.log(validationResult)
      if(!this.useAPI){
        this.applyValidationResult(validationResult)
      }
    })
  }


  private applyValidationResult(validationResult: any){
    for(let result of validationResult){
      if(result.memberNames && result.memberNames.length > 0){
          this.form.controls[result.memberNames[0]].setErrors({'incorrect': true,'error': result.errorMessage})
      }else {
          this.form.setErrors({'error': result.errorMessage})
      }
  }
  }



  ngOnInit(): void {
    for (const formField of this.formFields) {
      if(formField.fieldType == "array"){
        this.form.addControl(formField.fieldName, new FormArray([]))
      } else {
        this.form.addControl(formField.fieldName, new FormControl(null));
      }
    }
    this.form.setValue(this.model)
    this.form.valueChanges.pipe(debounceTime(29)).subscribe(change => this.validate())
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
