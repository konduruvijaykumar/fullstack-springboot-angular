import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from 'src/app/list-todos/list-todos.component';
import { AppConstants } from 'src/app/app-constants';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private httpClient: HttpClient) { }

  getAllTodos(username: string) {
    return this.httpClient.get<Todo[]>(`${AppConstants.API_ENDPOINT}/users/${username}/todos`);
  }

  deleteTodo(username: string, id: number) {
    return this.httpClient.delete(`${AppConstants.API_ENDPOINT}/users/${username}/todos/${id}`);
  }

  fetchTodo(username: string, id: number) {
    return this.httpClient.get<Todo>(`${AppConstants.API_ENDPOINT}/users/${username}/todos/${id}`);
  }

  updateTodo(username: string, id: number, todo: Todo) {
    return this.httpClient.put<Todo>(`${AppConstants.API_ENDPOINT}/users/${username}/todos/${id}`, todo);
  }

  createTodo(username: string, todo: Todo) {
    return this.httpClient.post(`${AppConstants.API_ENDPOINT}/users/${username}/todos`, todo);
  }

}
