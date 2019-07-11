/**
 * 
 */
package org.pjay.todo.jwt.model;

import org.springframework.stereotype.Component;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

/**
 * @author vijayk
 *
 */
@JsonIgnoreProperties(ignoreUnknown = true)
@Component
public class JwtResponse {

	private String jwttoken;

	public JwtResponse() {
	}

	public JwtResponse(String jwttoken) {
		this.jwttoken = jwttoken;
	}

	public String getJwttoken() {
		return jwttoken;
	}

	public void setJwttoken(String jwttoken) {
		this.jwttoken = jwttoken;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((jwttoken == null) ? 0 : jwttoken.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		JwtResponse other = (JwtResponse) obj;
		if (jwttoken == null) {
			if (other.jwttoken != null)
				return false;
		} else if (!jwttoken.equals(other.jwttoken))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "JwtResponse [jwttoken=" + jwttoken + "]";
	}

}
