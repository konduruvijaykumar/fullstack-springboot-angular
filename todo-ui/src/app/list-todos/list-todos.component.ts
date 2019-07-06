import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  // todos = [
  //   new Todo(1, 'Learn Angular 7', false, new Date()),
  //   new Todo(2, 'Become an expert in Java', false, new Date()),
  //   new Todo(3, 'Learn Kubernetes', false, new Date())
  // ];

  todos: Todo[];

  constructor(private todoDataService: TodoDataService) { }

  ngOnInit() {
    this.todoDataService.getAllTodos('vijay').subscribe(
      response => {
        // console.log(response);
        this.todos = response;
      }
    );
  }

}

export class Todo {

  // public should be used as it is not getting shown in UI.
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) {}

}
