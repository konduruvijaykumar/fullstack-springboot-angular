import { TestBed } from '@angular/core/testing';

import { HelloDataService } from './hello-data.service';

describe('HelloDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HelloDataService = TestBed.get(HelloDataService);
    expect(service).toBeTruthy();
  });
});
