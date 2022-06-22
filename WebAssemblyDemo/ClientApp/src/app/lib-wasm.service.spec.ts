import { TestBed } from '@angular/core/testing';

import { LibWasmService } from './lib-wasm.service';

describe('LibWasmService', () => {
  let service: LibWasmService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibWasmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
