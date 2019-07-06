/**
 * 
 */
package org.pjay.todo.controller;

import java.util.List;

import org.pjay.todo.model.Todo;
import org.pjay.todo.service.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

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

}
