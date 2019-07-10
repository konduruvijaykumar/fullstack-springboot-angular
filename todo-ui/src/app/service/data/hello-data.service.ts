import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppConstants } from 'src/app/app-constants';

@Injectable({
  providedIn: 'root'
})
export class HelloDataService {

  constructor(private httpClient: HttpClient) { }

  callHelloMessageWebService() {
    // console.log('Call to backend service');
    return this.httpClient.get<Hello>(`${AppConstants.API_ENDPOINT}/hello-bean`);
  }

  // Note: After adding form based and basic auth to spring rest service resources, we will not be able to get data.
  // To fix it we will send basic auth data as headers for API calls.
  // It is not a better practice to add basic auth header to all requests. We will later use Interceptors to that for all requests.
  callHelloPathVariableService(name: string) {
    // The below quotes are not single quotes, they are actually backtick or backquote
    // Available below esc button. This allows to use variables
    // Interceptor will take care of this, hardcoding will be removed
    // const basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();
    // const headers = new HttpHeaders({
    //   Authorization: basicAuthHeaderString
    // });
    // When passing headers with differnt name object like header, then use {headers: header}. If the name is headers then use {headers}.
    // return this.httpClient.get<Hello>(`${AppConstants.API_ENDPOINT}/hello-path-param/${name}`, {headers});
    return this.httpClient.get<Hello>(`${AppConstants.API_ENDPOINT}/hello-path-param/${name}`);
  }

  // createBasicAuthenticationHttpHeader() {
  //   const username = 'vijay';
  //   const password = 'password';
  //   const basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
  //   return basicAuthHeaderString;
  // }

}

export class Hello {
  constructor(
    public message: string
    ) {}
}
