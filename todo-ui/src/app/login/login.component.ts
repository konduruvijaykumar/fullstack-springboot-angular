import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'vijay';
  password = 'password';

  constructor() { }

  ngOnInit() {
  }

  handleLogin(){
    console.log('username: ' + this.username);
    // console.log('password: ' + this.password);
  }

}
