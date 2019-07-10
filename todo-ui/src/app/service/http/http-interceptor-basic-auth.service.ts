import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorBasicAuthService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const username = 'vijay';
    const password = 'password';
    const basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);

    // request objects cannot be modified, hence we clone override a specific property
    req = req.clone({
      setHeaders: {
        Authorization: basicAuthHeaderString
      }
    });

    return next.handle(req);
  }

}
