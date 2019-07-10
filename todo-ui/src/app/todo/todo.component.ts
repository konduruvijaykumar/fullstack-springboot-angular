import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Todo } from '../list-todos/list-todos.component';
import { ActivatedRoute, Router } from '@angular/router';
import { AppConstants } from '../app-constants';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id: number;
  todo: Todo;

  constructor(
    private todoDataService: TodoDataService,
    private activatedRoute: ActivatedRoute,
    private router: Router
    ) {}

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params.id;
    this.todo = new Todo(this.id, '', false, new Date());
    if (this.id >= 0) {
      this.getTodo();
    }
  }

  getTodo() {
    const user = sessionStorage.getItem(AppConstants.AUTHENTICATED_USER);
    // The problem issue - "Cannot read property 'description' of undefined" is async load of data.
    // We with fix it eith empty todo object for now. So that the user experience is not going bad.
    // This emplty data will not be shown, unless the webservice call takes long time to load data.
    this.todoDataService.fetchTodo(user, this.id).subscribe(
      response => {
        if (response) {
          this.todo = response;
        } else {
          // Reset if data is not present for a id from service, when url is chaged and loaded
          this.id = -1;
          this.todo.id = this.id;
        }
        // console.log(this.todo);
      }
    );
  }

  saveTodo() {
    const user = sessionStorage.getItem(AppConstants.AUTHENTICATED_USER);
    if (this.id >= 0) {
      this.todoDataService.updateTodo(user, this.id, this.todo).subscribe(
        response => {
          // console.log(response);
          this.todo = response;
          this.router.navigate(['todos']);
        }
      );
    } else {
      // Create todo
      this.todoDataService.createTodo(user, this.todo).subscribe(
        response => {
          // console.log(response);
          this.router.navigate(['todos']);
        }
      );
    }
  }

}
