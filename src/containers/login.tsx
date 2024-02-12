import React, { ReactElement, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

export function LoginPage(): ReactElement {
	const [errorMessage, setErrorMessage] = useState<string>();
	
	const onSubmit = ((formData : React.SyntheticEvent) => {
		formData.preventDefault();

		const target = formData.target as typeof formData.target & {
			usernameOrEmail: { value: string };
			password: { value: string };
		  };

		const data = {
			usernameOrEmail : target.usernameOrEmail.value, 
			password : target.password.value
		}

		console.log(data);

		axios({
			method: 'post',
			url: 'http://localhost:8080/api/auth/signin',
			data: data
		}).catch(reason => setErrorMessage("Your identifiants are incorrect."));
	});

    return (
        <div>
			<form onSubmit={onSubmit}>
				<label>
					Username Or Email
					<input type="text" name="usernameOrEmail" />
				</label>
				<label>
					Password
					<input type="password" name="password"/>
				</label>
				<input type="submit" value="submit" />
			</form>
			<br />
			{errorMessage}
			<NavLink to={'/register'}>
				Create an account
			</NavLink>
        </div>
    )
}