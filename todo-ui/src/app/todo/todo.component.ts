import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Todo } from '../list-todos/list-todos.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id: number;
  todo: Todo;

  constructor(private todoDataService: TodoDataService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params.id;
    this.getTodo();
  }

  getTodo() {
    const user = sessionStorage.getItem('authenticatedUser');
    // The problem issue - "Cannot read property 'description' of undefined" is async load of data.
    // We with fix it eith empty todo object for now. So that the user experience is not going bad.
    // This emplty data will not be shown, unless the webservice call takes long time to load data.
    this.todo = new Todo(0, '', false, new Date());
    this.todoDataService.fetchTodo(user, this.id).subscribe(
      response => {
        this.todo = response;
        // console.log(this.todo);
      }
    );
  }

  saveTodo() {
    const user = sessionStorage.getItem('authenticatedUser');
    this.todoDataService.updateTodo(user, this.id, this.todo).subscribe(
      response => {
        console.log(response);
        this.todo = response;
      }
    );
  }

}
