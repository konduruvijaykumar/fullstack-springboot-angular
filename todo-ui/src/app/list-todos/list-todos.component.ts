import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos = [
    {id: 1, description: 'Learn Angular 7'},
    {id: 2, description: 'Become an expert in Java'},
    {id: 3, description: 'Learn Kubernetes'}
  ];

  // Create object holding data, below is syntax
  // todo = {
  //   id: 1,
  //   description: 'Learn Angular 7'
  // };

  constructor() { }

  ngOnInit() {
  }

}
