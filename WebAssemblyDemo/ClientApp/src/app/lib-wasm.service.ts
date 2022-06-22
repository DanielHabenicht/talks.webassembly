import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { SharedLibrary } from 'src/assets/lib-wasm/dotnet';
import * as dotnet  from '../assets/lib-wasm/dotnet.js';

@Injectable({
  providedIn: 'root',
})
export class LibWasmService {
  private wasmReady = new BehaviorSubject<boolean>(false);

  constructor() {
    this.instantiateWasm();
  }

  private async instantiateWasm() {
    await dotnet.boot();
    this.wasmReady.next(true);
  }

  public validateModel(model: SharedLibrary.User): Observable<any>{
    return this.wasmReady.pipe(filter((value) => value === true)).pipe(
      map(() => {
        return dotnet.WASMLib.Validate(model);
      })
    );
  }
}
