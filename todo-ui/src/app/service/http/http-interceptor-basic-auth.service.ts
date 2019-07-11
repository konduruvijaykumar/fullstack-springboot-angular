import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { BasicAuthenticationService } from '../basic-authentication.service';
import { JwtAuthenticationService } from '../jwt-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorBasicAuthService implements HttpInterceptor {

  constructor(
    private basicAuthenticationService: BasicAuthenticationService,
    private jwtAuthenticationService: JwtAuthenticationService
    ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // const username = 'vijay';
    // const password = 'password';
    // const basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
    // const basicAuthHeaderString = this.basicAuthenticationService.getAuthenticatedBasicAuthToken();
    // const username = this.basicAuthenticationService.getAuthenticatedUser();

    const jwtAuthHeaderString = this.jwtAuthenticationService.getAuthenticatedJWTAuthToken();
    const username = this.jwtAuthenticationService.getAuthenticatedUser();

    if (jwtAuthHeaderString && username) {
      // request objects cannot be modified, hence we clone override a specific property
      // Only execute if data is available, else don't change headers. This will not overrite login related headers
      req = req.clone({
        setHeaders: {
          Authorization: jwtAuthHeaderString
        }
      });
    }

    return next.handle(req);
  }

}
