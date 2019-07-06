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
public interface TodoService {

	List<Todo> getAllTodos(String username);

	Todo deleteTodoById(Long id);

}
