/**
 * 
 */
package org.pjay.todo.basic.auth;

import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

/**
 * @author vijayk
 *
 */
@Configuration
@EnableWebSecurity
public class SpringSecurityBasicAuthConfig extends WebSecurityConfigurerAdapter {

	@Override
	// @formatter:off
	// https://stackoverflow.com/questions/1820908/how-to-turn-off-the-eclipse-code-formatter-for-certain-sections-of-java-code
	// https://stackoverflow.com/questions/4470232/how-do-i-change-the-code-convention-in-eclipse
	protected void configure(HttpSecurity http) throws Exception {
		http
		.csrf().disable()
		.authorizeRequests()
		.antMatchers(HttpMethod.OPTIONS, "/**").permitAll()
		.anyRequest().authenticated().and()
		//.formLogin().and()
		.httpBasic();
	}
	// @formatter:on

}
