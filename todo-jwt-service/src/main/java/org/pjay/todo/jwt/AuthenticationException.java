/**
 * 
 */
package org.pjay.todo.jwt;

/**
 * @author vijayk
 *
 */
public class AuthenticationException extends RuntimeException {

	private static final long serialVersionUID = -9076041530549575829L;

	public AuthenticationException(String message, Throwable cause) {
		super(message, cause);
	}
}
