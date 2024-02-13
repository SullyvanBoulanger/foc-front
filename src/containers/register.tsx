import axios from "axios";
import { ReactElement, useState } from "react";
import { useForm } from "../utils/use-form";
import { LabeledInput } from "../components/LabeledInput";

type RegisterData = {
	username : string
    email : string
	password : string
    passwordConfirmation : string
}

export function RegisterPage(): ReactElement {
    const {formState, handleSubmit, handleInputChange} = useForm<RegisterData>({
        username : '',
        email : '',
        password : '',
        passwordConfirmation : ''
    });
    const [errorMessage, setErrorMessage] = useState<string>();
	
	const onSubmit = (data: RegisterData) => {
		console.log(data);
        if(data.password !== data.passwordConfirmation){
            setErrorMessage("Your passwords do no match")
        }else{
            setErrorMessage('');
            const {passwordConfirmation, ...body} = data;
            axios({
                method: 'post',
                url: 'http://localhost:8080/api/auth/signup',
                data: body
            }).catch(reason => setErrorMessage(reason));
        }
	};

    return (
        <div>
			<form onSubmit={(event) => handleSubmit(event, onSubmit)}>
                <LabeledInput
                    label="Username"
                    type="text"
                    name="username"
                    value={formState.username}
                    onChange={handleInputChange}
                />
                <br/>
                <LabeledInput
                    label="Email"
                    type="text"
                    name="email"
                    value={formState.email}
                    onChange={handleInputChange}
                />
                <br/>
				<LabeledInput
                    label="Password"
                    type="password"
                    name="password"
                    value={formState.password}
                    onChange={handleInputChange}
                />
                <br/>
                <LabeledInput
                    label="Password Confirmation"
                    type="password"
                    name="passwordConfirmation"
                    value={formState.passwordConfirmation}
                    onChange={handleInputChange}
                />
                <br/>
				<input type="submit" value="Register" />
			</form>
            <br/>
            {errorMessage}
        </div>
    )
}