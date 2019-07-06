/**
 * 
 */
package org.pjay.todo.service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

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

	@Override
	public Todo deleteTodoById(Long id) {
		Todo todo = findById(id);
		if (null != todo && todos.remove(todo)) {
			return todo;
		}
		return null;
	}

	// We will make it public so that it can be reused for fetch by id
	public Todo findById(Long id) {
		Optional<Todo> optionalTodo = todos.stream()
				.filter(todoObj -> (Objects.nonNull(todoObj) && id == todoObj.getId())).findFirst();
		if (optionalTodo.isPresent()) {
			return optionalTodo.get();
		}
		return null;
	}

}
