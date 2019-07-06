import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HelloDataService {

  constructor(private httpClient: HttpClient) { }

  callHelloMessageWebService() {
    // console.log('Call to backend service');
    return this.httpClient.get<Hello>('http://localhost:8080/hello-bean');
  }

  callHelloPathVariableService(name: string) {
    // The below quotes are not single quotes, they are actually backtick or backquote
    // Available below esc button. This allows to use variables
    return this.httpClient.get<Hello>(`http://localhost:8080/hello-path-param/${name}`);
  }

}

export class Hello {
  constructor(
    public message: string
    ) {}
}
