/**
 * 
 */
package org.pjay.hello.controller;

import org.pjay.hello.model.HelloBean;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author vijayk
 *
 */
@RestController
@CrossOrigin(origins="http://localhost:4200")
public class HelloController {
	
	@GetMapping("/hello")
	// @GetMapping() is a shortcut for @RequestMapping(method = RequestMethod.GET)
	// Similar methods for Post, Put, Delete, Patch
	public String hello() {
		return "Hello";
	}
	
	@GetMapping("/hello-bean")
	public HelloBean helloBean() {
		HelloBean helloBean = new HelloBean();
		helloBean.setMessage("Hello from bean");
		throw new RuntimeException("An error occurred, please contact help desk");
		// return helloBean;
	}
	
	@GetMapping("/hello-path-param/{name}")
	public HelloBean helloBeanWithPathParam(@PathVariable String name) {
		HelloBean helloBean = new HelloBean();
		helloBean.setMessage(String.format("Hello %s", name));
		return helloBean;
	}

}
