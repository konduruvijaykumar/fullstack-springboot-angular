import { Injectable } from '@angular/core';
import { ALLOW_MULTIPLE_PLATFORMS } from '@angular/core/src/application_ref';

@Injectable({
  providedIn: 'root'
})
export class LocalAuthenticationService {

  constructor() { }

  authenticate(username: string, password: string) {
    if (username === 'vijay' && password === 'password') {
      sessionStorage.setItem('authenticatedUser', username);
      return true;
    }
    return false;
  }

  isUserLoggedIn() {
    const user = sessionStorage.getItem('authenticatedUser');
    return !(user === null);
  }

}
