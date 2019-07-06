import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HelloDataService {

  constructor(private httpClient: HttpClient) { }

  callHelloMessageWebService() {
    // console.log('Call to backend service');
    return this.httpClient.get('http://localhost:8080/hello-bean');
  }

}
