// package org.pjay.todo;
// Comparing java - it is some thing like default package here, but in case of angular it is in from of modules.
// To access a class outside you should use export before class in angular.
// So that it is accessible outside, if not you will get compiler error. (Some thing like public class)

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// We can import classes written by us also here.
// import {AppComponent} from '../app.component';

// Below is like annotation in java app with attributes passed to annotation
// @ComponentScan(
//  value = "org.pjay.todo"
// )
// Below is decorator and passes object as parameter to provide configuration metadata
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
// Some thing like class creation or decleration in java
// public class TodoApplication implements SomeInterface {..}
export class WelcomeComponent implements OnInit {

  // Member variables, can have single '' or "" for strings this works fine for both.
  // It is better to use ''
  // message = "Some Message"; // you will get tslint warning for "" recommending to change to ''.
  message = 'Some Message';
  // message1:string = 'Some Message'; // Using via strong type reference
  name = '';

  // Here there can be member or local variables inside methods, member variables in methods should be accessed via this keyword
  // Like java constructor
  // public TodoApplication() {..}
  // Dependency injection
  constructor(private route: ActivatedRoute) { }

  // Implement interface method, java it would be void init() {..}
  ngOnInit() {
    // Added for accessing member varaibles.
    // console.log(this.message);
    // variable type inferred automatically based on the value assigned by type script
    // this.message = 4; // Compilation error - Type '4' is not assignable to type 'string'
    // Tslint error - object access via string literals is disallowed (no-string-literal), hence use as below
    // console.log(this.route.snapshot.params['name']);
    // console.log(this.route.snapshot.params.name);
    this.name = this.route.snapshot.params.name;
  }
  // also possible to used return type here using
  // ngOnInit() : void{
  // }

  getWelcomeMessage(){
    console.log('Welcom service');
  }

}

// Module (Ex: This Component) is a file which contains classes and functions definitions.
// In angular one component file per module or one module per component file, but we can have number of classes inside same file component
// export class SomeClass1{
// }

// export class SomeClass2{
// }
