import { TestBed } from '@angular/core/testing';

import { HandleerrorsService } from './handleerrors.service';

describe('HandleerrorsService', () => {
  let service: HandleerrorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HandleerrorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
