import { TestBed } from '@angular/core/testing';

import { HttpInvokeService } from './http-invoke.service';

describe('HttpInvokeService', () => {
  let service: HttpInvokeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpInvokeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
