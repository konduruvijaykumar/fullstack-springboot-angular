import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  constructor(private router: Router) { }

  ngOnInit() {
  }

  handleLogin() {
    // console.log('username: ' + this.username);
    // console.log('password: ' + this.password);
    if (this.username === 'vijay' && this.password === 'password') {
      this.invalidLogin = false;
      // Redirect to welcome page.
      this.router.navigate(['welcome', this.username]);
    } else {
      this.invalidLogin = true;
    }
  }

}
