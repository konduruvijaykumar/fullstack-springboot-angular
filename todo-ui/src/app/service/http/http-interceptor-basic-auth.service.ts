import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { BasicAuthenticationService } from '../basic-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorBasicAuthService implements HttpInterceptor {

  constructor(private basicAuthenticationService: BasicAuthenticationService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // const username = 'vijay';
    // const password = 'password';
    // const basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
    const basicAuthHeaderString = this.basicAuthenticationService.getAuthenticatedBasicAuthToken();
    const username = this.basicAuthenticationService.getAuthenticatedUser();

    if (basicAuthHeaderString && username) {
      // request objects cannot be modified, hence we clone override a specific property
      // Only execute if data is available, else don't change headers. This will not overrite login related headers
      req = req.clone({
        setHeaders: {
          Authorization: basicAuthHeaderString
        }
      });
    }

    return next.handle(req);
  }

}
