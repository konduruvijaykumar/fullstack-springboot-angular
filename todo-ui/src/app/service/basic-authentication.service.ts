import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

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
    return this.httpClient.get<AuthenticationBean>(`http://localhost:8080/basicauth`, {headers}).pipe(
      map(
        response => {
          sessionStorage.setItem('authenticatedUser', username);
          return response;
        }
      )
    );
  }

  isUserLoggedIn() {
    const user = sessionStorage.getItem('authenticatedUser');
    return !(user === null);
  }

  logout() {
    sessionStorage.removeItem('authenticatedUser');
  }

}

export class AuthenticationBean {
  constructor(public message: string) {}
}
