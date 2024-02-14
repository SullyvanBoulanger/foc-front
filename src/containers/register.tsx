import axios from "axios";
import { ReactElement, useState } from "react";
import Form from "../components/form";
import Label from "../nectron/label";
import InputForm from "../components/input-form";
import Input from "../nectron/input";
import { api } from "../utils/api";

export function RegisterPage(): ReactElement {
    const [errorMessage, setErrorMessage] = useState<string>();

    const initialState : Record<string, string> = {
            username : '',
            email : '',
            password : '',
            passwordConfirmation : ''
        }
	
	const onSubmit = (data: Record<string, string>) => {
        if(data.password !== data.passwordConfirmation){
            setErrorMessage("Your passwords do no match")
        }else{
            setErrorMessage('');
            const {passwordConfirmation, ...body} = data;
            api.post('/auth/signup', body)
                .catch(reason => setErrorMessage(reason));
        }
	};

    return (
        <div>
            <Form initialState={initialState} handleSubmit={onSubmit}>
                <Label>
					Username
					<InputForm name="username"/>
				</Label>
                <Label>
					Email
					<InputForm name="email" type="email"/>
				</Label>
				<Label>
					Password
					<InputForm type="password" name="password"/>
				</Label>
                <Label>
					Password Confirmation
					<InputForm type="password" name="passwordConfirmation"/>
				</Label>
				<Input type="submit" value="Register" />
                <br/>
                {errorMessage}
            </Form>
        </div>
    )
}
