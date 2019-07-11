import { Component, OnInit } from '@angular/core';
import { LocalAuthenticationService } from '../service/local-authentication.service';
import { JwtAuthenticationService } from '../service/jwt-authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  // isUserLoggedIn = false;

  constructor(
    private localAuthenticationService: LocalAuthenticationService,
    private jwtAuthenticationService: JwtAuthenticationService
    ) { }

  ngOnInit() {
    // this.isUserLoggedIn = this.localAuthenticationService.isUserLoggedIn();
  }

}
