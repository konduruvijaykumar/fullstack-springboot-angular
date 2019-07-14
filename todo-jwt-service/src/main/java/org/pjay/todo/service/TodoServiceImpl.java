/**
 * 
 */
package org.pjay.todo.service;

import java.util.List;
import java.util.Optional;

import org.pjay.todo.model.Todo;
import org.pjay.todo.repository.TodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * @author vijayk
 *
 */
@Service
public class TodoServiceImpl implements TodoService {

	@Autowired
	TodoRepository repository;

	@Override
	public List<Todo> getAllTodos(String username) {
		return repository.findByUsername(username);
	}

	@Override
	public Todo deleteTodoById(Long id) {
		Optional<Todo> todo = repository.findById(id);
		if (todo.isPresent()) {
			try {
				repository.deleteById(id);
			} catch (Exception e) {
				e.printStackTrace();
				return null;
			}
			return todo.get();
		}
		return null;
	}

	// We will make it public so that it can be reused for fetch by id
	@Override
	public Todo findById(Long id) {
		Optional<Todo> optionalTodo = repository.findById(id);
		if (optionalTodo.isPresent()) {
			return optionalTodo.get();
		}
		return null;
	}

	@Override
	public Todo saveTodo(Todo todo) {
		if (null == todo.getId() || todo.getId() < 0) {
			// Need to revisit if logic, null check should be good if you don't pass value
			// Create Todo
			todo.setId(null);
			todo = repository.save(todo);
		} else {
			// Update Todo
			todo = repository.save(todo);
		}
		return todo;
	}

}
