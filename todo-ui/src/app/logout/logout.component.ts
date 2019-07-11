import { Component, OnInit } from '@angular/core';
import { Local } from 'protractor/built/driverProviders';
import { LocalAuthenticationService } from '../service/local-authentication.service';
import { JwtAuthenticationService } from '../service/jwt-authentication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(
    private localAuthenticationService: LocalAuthenticationService,
    private jwtAuthenticationService: JwtAuthenticationService
    ) { }

  ngOnInit() {
    this.jwtAuthenticationService.logout();
  }

}
