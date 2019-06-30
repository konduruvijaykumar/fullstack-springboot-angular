import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  errorMessage = '404 the requested resource is not found, please contact help desk';

  constructor() { }

  ngOnInit() {
  }

}
