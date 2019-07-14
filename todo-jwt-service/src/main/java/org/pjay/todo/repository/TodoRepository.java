/**
 * 
 */
package org.pjay.todo.repository;

import java.util.List;

import org.pjay.todo.model.Todo;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @author vijayk
 *
 */
public interface TodoRepository extends JpaRepository<Todo, Long> {

	List<Todo> findByUsername(String username);
	
	Todo findByIdAndUsername(Long id, String username);
	
	void deleteByIdAndUsername(Long id, String username);

}
