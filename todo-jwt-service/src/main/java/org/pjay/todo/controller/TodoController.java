/**
 * 
 */
package org.pjay.todo.controller;

import java.net.URI;
import java.util.List;

import org.pjay.todo.model.Todo;
import org.pjay.todo.service.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

/**
 * @author vijayk
 *
 */
@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class TodoController {

	@Autowired
	TodoService todoService;

	@GetMapping("/users/{username}/todos")
	public List<Todo> getAllTodos(@PathVariable String username) {
		return todoService.getAllTodos(username);
	}

	@GetMapping("/users/{username}/todos/{id}")
	public Todo getTodo(@PathVariable String username, @PathVariable Long id) {
		// We don't need to find by user and id, as id is unique we will the correct record. Data jpa method is added in repository for both param's
		return todoService.findById(id);
	}

	@DeleteMapping("/users/{username}/todos/{id}")
	public ResponseEntity<Void> deleteTodo(@PathVariable String username, @PathVariable Long id) {
		// We don't need to delete by user and id, as id is unique we will delete correct record. Data jpa method is added in repository for both param's
		Todo todo = todoService.deleteTodoById(id);
		if (null != todo) {
			return ResponseEntity.noContent().build();
		}
		return ResponseEntity.notFound().build();
	}

	@PutMapping("/users/{username}/todos/{id}")
	public ResponseEntity<Todo> updateTodo(@RequestBody Todo todo, @PathVariable String username,
			@PathVariable Long id) {
		// As we fetch todo object and save, no need passing all other parameters and todo object has unique is
		Todo updatedTodo = todoService.saveTodo(todo);
		return new ResponseEntity<>(updatedTodo, HttpStatus.OK);
	}

	@PostMapping("/users/{username}/todos")
	public ResponseEntity<Void> createTodo(@RequestBody Todo todo, @PathVariable String username) {
		// As we fetch todo object and save, no need passing all other parameters and todo object has unique is
		Todo createdTodo = todoService.saveTodo(todo);
		/*
		 * Better practice in creating resource in Rest API, is to provide the URI to
		 * the resource created. The full URI will be sent in headers Example:
		 * http://localhost:8080/users/vijay/todos/4
		 */
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(createdTodo.getId())
				.toUri();
		return ResponseEntity.created(uri).build();
	}

}
