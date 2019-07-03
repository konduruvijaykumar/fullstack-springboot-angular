import { Component, OnInit } from '@angular/core';
import { LocalAuthenticationService } from '../service/local-authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  // isUserLoggedIn = false;

  constructor(private localAuthenticationService: LocalAuthenticationService) { }

  ngOnInit() {
    // this.isUserLoggedIn = this.localAuthenticationService.isUserLoggedIn();
  }

}
