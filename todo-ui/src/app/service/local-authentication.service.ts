import { Injectable } from '@angular/core';
import { ALLOW_MULTIPLE_PLATFORMS } from '@angular/core/src/application_ref';
import { AppConstants } from '../app-constants';

@Injectable({
  providedIn: 'root'
})
export class LocalAuthenticationService {

  constructor() { }

  authenticate(username: string, password: string) {
    // console.log('Before authenticate : ' + this.isUserLoggedIn());
    if (username === 'vijay' && password === 'password') {
      sessionStorage.setItem(AppConstants.AUTHENTICATED_USER, username);
      // console.log('After authenticate : ' + this.isUserLoggedIn());
      return true;
    }
    return false;
  }

  isUserLoggedIn() {
    const user = sessionStorage.getItem(AppConstants.AUTHENTICATED_USER);
    return !(user === null);
  }

  logout() {
    sessionStorage.removeItem(AppConstants.AUTHENTICATED_USER);
  }

}
