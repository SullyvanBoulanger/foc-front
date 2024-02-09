import { ReactElement, useState } from "react";
import { useForm } from "react-hook-form";
import ky from "ky";
import { NavLink } from "react-router-dom";

type FormData = {
	usernameOrEmail : string
	password : string
}

export function LoginPage(): ReactElement {
	const {register, handleSubmit, formState: {errors}} = useForm<FormData>();
	const [errorMessage, setErrorMessage] = useState<string>();
	
	const onSubmit = handleSubmit(async (data) => {
		console.log(data);
		ky.post('http://localhost:8080/api/auth/signin', {json: {...data}})
			.catch(reason => setErrorMessage("Your identifiants are incorrect."));
	});

    return (
        <div>
			<form onSubmit={onSubmit}>
				<label>
					Username Or Email
					<input type="text" {...register("usernameOrEmail",{
						required: "Username/Email is required"
					})} />
					{errors.usernameOrEmail && <p>{errors.usernameOrEmail.message}</p>}
				</label>
				<label>
					Password
					<input type="password" {...register("password",{
						required: "Password is required"
					})} />
					{errors.password && <p>{errors.password.message}</p>}
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