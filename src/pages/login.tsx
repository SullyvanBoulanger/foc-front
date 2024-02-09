import { ReactElement } from "react";
// import { LabeledInput } from "../components/labeled-input";
import { useForm } from "react-hook-form";
import ky from "ky";

type FormData = {
	usernameOrEmail : string
	password : string
}

export function LoginPage(): ReactElement {
	const {register, handleSubmit} = useForm<FormData>();
	
	const onSubmit = handleSubmit((data) => {
		console.log(data);
		ky.post('http://localhost:8080/api/auth/signin', {json: {...data}});
	});

    return (
        <div>
			<form onSubmit={onSubmit}>
				{/* <LabeledInput label="Username Or Email" type="text" {...register("usernameOrEmail")} />
				<LabeledInput label="Password" type="password" {...register("password")} /> */}
				<label>
					Username Or Email
					<input type="text" {...register("usernameOrEmail")} />
				</label>
				<label>
					Password
					<input type="text" {...register("password")} />
				</label>
				<input type="submit" value="submit" />
			</form>
        </div>
    )
}