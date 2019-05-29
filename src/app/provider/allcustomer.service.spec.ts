import { TestBed } from '@angular/core/testing';

import { AllcustomerService } from './allcustomer.service';

describe('AllcustomerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AllcustomerService = TestBed.get(AllcustomerService);
    expect(service).toBeTruthy();
  });
});
