import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalAuthenticationService } from '../service/local-authentication.service';

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
  constructor(private router: Router, private localAuthenticationService: LocalAuthenticationService) { }

  ngOnInit() {
  }

  handleLogin() {
    // console.log('username: ' + this.username);
    // console.log('password: ' + this.password);
    if (this.localAuthenticationService.authenticate(this.username, this.password)) {
      this.invalidLogin = false;
      // sessionStorage.setItem('authenticatedUser', this.username);
      // Redirect to welcome page.
      this.router.navigate(['welcome', this.username]);
    } else {
      this.invalidLogin = true;
    }
  }

}
