/**
 * 
 */
package org.pjay.todo.service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.pjay.todo.model.Todo;
import org.springframework.stereotype.Service;

/**
 * @author vijayk
 *
 */
@Service
public class TodoServiceImpl implements TodoService {
	
	private static List<Todo> todos = new ArrayList<>();
	private static long counter = 0;
	
	static {
		todos.add(new Todo(++counter, "vijay", "Learn Angular 7", new Date(), false));
		todos.add(new Todo(++counter, "vijay", "Become an expert in Java", new Date(), false));
		todos.add(new Todo(++counter, "vijay", "Learn Kubernetes", new Date(), false));
	}

	@Override
	public List<Todo> getAllTodos(String username) {
		return todos;
	}
	
	

}
