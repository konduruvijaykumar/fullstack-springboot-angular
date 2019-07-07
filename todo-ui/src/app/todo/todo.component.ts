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
    this.todoDataService.fetchTodo(user, this.id).subscribe(
      response => {
        this.todo = response;
        console.log(this.todo);
      }
    );
  }

}
