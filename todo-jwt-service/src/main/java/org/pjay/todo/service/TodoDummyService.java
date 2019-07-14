/**
 * 
 */
package org.pjay.todo.service;

import java.util.List;

import org.pjay.todo.model.Todo;

/**
 * @author vijayk
 *
 */
public interface TodoDummyService {

	List<Todo> getAllTodos(String username);

	Todo deleteTodoById(Long id);

	Todo findById(Long id);

	Todo saveTodo(Todo todo);

}
