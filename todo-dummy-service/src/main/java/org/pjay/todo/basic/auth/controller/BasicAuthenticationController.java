/**
 * 
 */
package org.pjay.todo.basic.auth.controller;

import org.pjay.todo.basic.auth.model.AuthenticationBean;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author vijayk
 *
 */
@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class BasicAuthenticationController {
	
	@GetMapping("/basicauth")
	public AuthenticationBean verifyBasicAuth() {
		return new AuthenticationBean("You are authenticated");
	}

}
