import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalAuthenticationService } from '../service/local-authentication.service';
import { BasicAuthenticationService } from '../service/basic-authentication.service';
import { AppConstants } from '../app-constants';
import { JwtAuthenticationService } from '../service/jwt-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'vijay';
  password = 'password';
  invalidLogin = false;
  errorMessage = 'Invalid Credentials';

  // Dependency injection is a built in faeture, just declare it as constructor argument.
  // In type script variable passed in constructor is available as member variable.
  // Making private will not be visible outside class
  constructor(
    private router: Router,
    private localAuthenticationService: LocalAuthenticationService,
    private basicAuthenticationService: BasicAuthenticationService,
    private jwtAuthenticationService: JwtAuthenticationService
    ) { }

  ngOnInit() {
  }

  handleLogin() {
    // console.log('username: ' + this.username);
    // console.log('password: ' + this.password);
    if (this.localAuthenticationService.authenticate(this.username, this.password)) {
      this.invalidLogin = false;
      // sessionStorage.setItem(AppConstants.AUTHENTICATED_USER, this.username);
      // Redirect to welcome page.
      this.router.navigate(['welcome', this.username]);
    } else {
      this.invalidLogin = true;
    }
  }

  handleBasicAuthLogin() {
    this.basicAuthenticationService.callBasicAuthService(this.username, this.password).subscribe(
      response => {
        // console.log(response);
        // sessionStorage.setItem(AppConstants.AUTHENTICATED_USER, this.username);
        this.invalidLogin = false;
        this.router.navigate(['welcome', this.username]);
      },
      error => {
        // console.log(error);
        this.invalidLogin = true;
      }
    );
  }

  handleJWTAuthLogin() {
    this.jwtAuthenticationService.callJWTAuthService(this.username, this.password).subscribe(
      response => {
        // console.log(response);
        // sessionStorage.setItem(AppConstants.AUTHENTICATED_USER, this.username);
        this.invalidLogin = false;
        this.router.navigate(['welcome', this.username]);
      },
      error => {
        // console.log(error);
        this.invalidLogin = true;
      }
    );
  }

}
