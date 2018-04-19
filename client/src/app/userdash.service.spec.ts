import { TestBed, inject } from '@angular/core/testing';

import { UserdashService } from './userdash.service';

describe('UserdashService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserdashService]
    });
  });

  it('should be created', inject([UserdashService], (service: UserdashService) => {
    expect(service).toBeTruthy();
  }));
});
