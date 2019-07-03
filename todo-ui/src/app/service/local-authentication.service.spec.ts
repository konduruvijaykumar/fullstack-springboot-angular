import { TestBed } from '@angular/core/testing';

import { LocalAuthenticationService } from './local-authentication.service';

describe('LocalAuthenticationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LocalAuthenticationService = TestBed.get(LocalAuthenticationService);
    expect(service).toBeTruthy();
  });
});
