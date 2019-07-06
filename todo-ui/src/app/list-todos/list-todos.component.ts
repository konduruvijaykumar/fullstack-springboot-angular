import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';

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
  message: string;

  constructor(private todoDataService: TodoDataService, private router: Router) { }

  ngOnInit() {
    this.refreshTodos();
  }

  refreshTodos() {
    const username = (sessionStorage.getItem('authenticatedUser') === null) ? '' : sessionStorage.getItem('authenticatedUser');
    this.todoDataService.getAllTodos(username).subscribe(
      response => {
        // console.log(response);
        this.todos = response;
      }
    );
  }

  deleteTodo(id: number) {
    // console.log('id : ' + id);
    const username = (sessionStorage.getItem('authenticatedUser') === null) ? '' : sessionStorage.getItem('authenticatedUser');
    // console.log(this.todoDataService.deleteTodo(username, id));
    this.todoDataService.deleteTodo(username, id).subscribe(
      response => {
        // console.log(response);
        this.message = `Delete Of Todo With Id ${id} Successful`;
        this.refreshTodos();
      }
    );
  }

  updateTodo(id: number) {
    // console.log('id : ' + id);
    this.router.navigate(['todos', id]);
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
