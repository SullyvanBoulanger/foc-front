import React, { ReactElement, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import Form from "../components/form";
import Label from "../nectron/label";
import InputForm from "../components/input-form";
import Input from "../nectron/input";
import { api } from "../utils/api";

export function LoginPage(): ReactElement {
	const initialState: Record<string, string> = {
		usernameOrEmail: '',
		password: ''
	};
	const [errorMessage, setErrorMessage] = useState<string>();
	
	const onSubmit = ((data: Record<string, string>) => {
		api.post('/auth/signin', data)
			.catch(reason => setErrorMessage("Your identifiants are incorrect."));
	});

	return (
        <div>
			<Form handleSubmit={onSubmit} initialState={initialState}>
				<Label>
					Username Or Email
					<InputForm name="usernameOrEmail"/>
				</Label>
				<Label>
					Password
					<InputForm type="password" name="password"/>
				</Label>
				<Input type="submit" value="Log in" />
			</Form>
			<br />
			{errorMessage}
			<NavLink to={'/register'}>
				Create an account
			</NavLink>
        </div>
    );
}
