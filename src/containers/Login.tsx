import React, { ReactElement, useState } from "react";
import { NavLink } from "react-router-dom";
import Form from "@components/Form";
import Label from "@nectron/Label";
import InputForm from "@components/InputForm";
import Input from "@nectron/Input";
import { api } from "@utils/api";
import { PrimitiveTypes } from "@utils/UseForm";
import Button from "@nectron/Button";

export function LoginPage(): ReactElement {
	const initialState: Record<string, string> = {
		usernameOrEmail: '',
		password: ''
	};
	const [errorMessage, setErrorMessage] = useState<string>();
	
	const onSubmit = ((data: Record<string, PrimitiveTypes>) => {
		api.post('/auth/signin', data)
			.catch(reason => setErrorMessage("Your identifiants are incorrect."));
	});

	return (
        <div>
			<Form handleSubmit={onSubmit} formDefaultValue={initialState}>
				<Label>
					Username Or Email
					<InputForm name="usernameOrEmail"/>
				</Label>
				<Label>
					Password
					<InputForm type="password" name="password"/>
				</Label>
				<Button type="submit">
					Login
				</Button>
			</Form>

			<p>
				{errorMessage}
			</p>

			<p>
				<NavLink to={'/register'}>
					Create an account
				</NavLink>
			</p>
        </div>
    );
}
