import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AppConstants } from '../app-constants';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private httpClient: HttpClient) { }

  callBasicAuthService(username: string, password: string) {
    const basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
    const headers = new HttpHeaders({
      Authorization: basicAuthHeaderString
    });
    // When passing headers with differnt name object like header, then use {headers: header}. If the name is headers then use {headers}.
    return this.httpClient.get<AuthenticationBean>(`${AppConstants.API_ENDPOINT}/basicauth`, {headers}).pipe(
      map(
        response => {
          sessionStorage.setItem(AppConstants.AUTHENTICATED_USER, username);
          sessionStorage.setItem(AppConstants.BASIC_AUTH_TOKEN, basicAuthHeaderString);
          return response;
        }
      )
    );
  }

  getAuthenticatedUser() {
    return sessionStorage.getItem(AppConstants.AUTHENTICATED_USER);
  }

  getAuthenticatedBasicAuthToken() {
    if (sessionStorage.getItem(AppConstants.BASIC_AUTH_TOKEN)) {
      return sessionStorage.getItem(AppConstants.BASIC_AUTH_TOKEN);
    }
  }

  isUserLoggedIn() {
    const user = sessionStorage.getItem(AppConstants.AUTHENTICATED_USER);
    return !(user === null);
  }

  logout() {
    sessionStorage.removeItem(AppConstants.AUTHENTICATED_USER);
  }

}

export class AuthenticationBean {
  constructor(public message: string) {}
}
