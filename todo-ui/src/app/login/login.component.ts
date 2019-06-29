import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

  handleLogin() {
    // console.log('username: ' + this.username);
    // console.log('password: ' + this.password);
    if (this.username === 'vijay' && this.password === 'password') {
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }
  }

}
