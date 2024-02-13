import React, { ReactElement, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { useForm } from "../utils/use-form";
import { LabeledInput } from "../components/LabeledInput";

interface LoginData{
	usernameOrEmail: string;
	password: string;
}

export function LoginPage(): ReactElement {
	const {formState, handleInputChange, handleSubmit} = useForm<LoginData>({
		usernameOrEmail: '',
		password: ''
	});
	const [errorMessage, setErrorMessage] = useState<string>();
	
	const onSubmit = ((data: LoginData) => {
		axios({
			method: 'post',
			url: 'http://localhost:8080/api/auth/signin',
			data: data
		}).then(response => {
			if(response.status === 200){
				// TODO
				// navigate to
			}
		}).catch(reason => setErrorMessage("Your identifiants are incorrect."));
	});

    return (
        <div>
			<form onSubmit={(event) => handleSubmit(event, onSubmit)}>
				<LabeledInput 
					label="Username Or Email" 
					name="usernameOrEmail" 
					type="text" 
					value={formState.usernameOrEmail} 
					onChange={handleInputChange}
				/>

				<LabeledInput 
					label="Password" 
					name="password" 
					type="password" 
					value={formState.password} 
					onChange={handleInputChange}
				/>

				<input type="submit" value="Log in" />
			</form>
			<br />
			{errorMessage}
			<NavLink to={'/register'}>
				Create an account
			</NavLink>
        </div>
    )
}