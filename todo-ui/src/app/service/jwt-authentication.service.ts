import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AppConstants } from '../app-constants';

@Injectable({
  providedIn: 'root'
})
export class JwtAuthenticationService {

  constructor(private httpClient: HttpClient) { }

  callJWTAuthService(username: string, password: string) {
    // When parameters match with names of properties to be sent post payload. (Example: {username, password})
    // Then it will autmatically create payload with the same key value pairs, example below or craete object and pass
    return this.httpClient.post<JWTToken>(`${AppConstants.API_ENDPOINT}/authenticate`, {username, password}).pipe(
      map(
        response => {
          sessionStorage.setItem(AppConstants.AUTHENTICATED_USER, username);
          sessionStorage.setItem(AppConstants.AUTH_TOKEN, `Bearer ${response.jwttoken}`);
          return response;
        }
      )
    );
  }

  getAuthenticatedUser() {
    return sessionStorage.getItem(AppConstants.AUTHENTICATED_USER);
  }

  getAuthenticatedJWTAuthToken() {
    if (sessionStorage.getItem(AppConstants.AUTH_TOKEN)) {
      return sessionStorage.getItem(AppConstants.AUTH_TOKEN);
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

export class JWTToken {
  constructor(public jwttoken: string) {}
}
