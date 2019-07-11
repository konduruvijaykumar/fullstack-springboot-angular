/**
 * 
 */
package org.pjay.todo.jwt.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.pjay.todo.jwt.JwtUserDetails;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

/**
 * @author vijayk
 *
 */
@Service
public class JwtInMemoryUserDetailsService implements UserDetailsService {

	static List<JwtUserDetails> inMemoryUserList = new ArrayList<>();

	static {
		// https://stackoverflow.com/questions/49582971/encoded-password-does-not-look-like-bcrypt
		// password is password
		inMemoryUserList.add(new JwtUserDetails(1L, "vijay",
				"$2a$10$.xL1Zfg93Urhbl2LVV0Nze9gSHFBUaqtqJpOKZ//Dqugd9TOCEJ4i", "ROLE_USER_1"));
		// password is password@123
		inMemoryUserList.add(new JwtUserDetails(2L, "kumar",
				"$2a$10$pvOvYqoNbjAlKRZQK21I.uR7Mlwkvf8SEkSLLOrfUfQ9vYvdwF1zm", "ROLE_USER_2"));
	}

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		Optional<JwtUserDetails> jwtUser = inMemoryUserList.stream()
				.filter(jwtUserDetails -> jwtUserDetails.getUsername().equals(username)).findFirst();

		if (!jwtUser.isPresent()) {
			throw new UsernameNotFoundException(String.format("User %s is not found.", username));
		}

		return jwtUser.get();
	}

}
