// import axios from "axios";
// import { ReactElement, useState } from "react";

import { ReactElement } from "react";

// type FormData = {
// 	username : string
//     email : string
// 	password : string
//     passwordConfirmation : string
// }

// export function RegisterPage(): ReactElement {
//     const {register, handleSubmit, watch, formState: {errors}} = useForm<FormData>();
//     const [errorMessage, setErrorMessage] = useState<string>();
	
// 	const onSubmit = handleSubmit(async (data) => {
// 		console.log(data);
//         const {passwordConfirmation, ...body} = data;
//         axios({
// 			method: 'post',
// 			url: 'http://localhost:8080/api/auth/signup',
// 			data: body
// 		}).catch(reason => setErrorMessage(reason));
// 	});

//     return (
//         <div>
// 			<form onSubmit={onSubmit}>
// 				<label>
// 					Username
// 					<input type="text" {...register("username",{
//                         required: "Username is required"
//                     })} />
//                     {errors.username && <p>{errors.username.message}</p>}
// 				</label>
//                 <br/>
//                 <label>
// 					Email
// 					<input type="email" {...register("email",{
//                         required: "Email is required"
//                     })} />
//                     {errors.email && <p>{errors.email.message}</p>}
// 				</label>
//                 <br/>
// 				<label>
// 					Password
// 					<input type="password" {...register("password",{
//                         required: "Password is required"
//                     })} />
//                     {errors.password && <p>{errors.password.message}</p>}
// 				</label>
//                 <br/>
//                 <label>
// 					Password confirmation
// 					<input type="password" {...register("passwordConfirmation",{
//                         required: true,
//                         validate: (val: string) => {
//                             if (watch('password') !== val) {
//                                 return "Your passwords do no match"
//                             }
//                         }
//                     })} />
//                     {errors.passwordConfirmation && <p>{errors.passwordConfirmation.message}</p>}
// 				</label>
//                 <br/>
// 				<input type="submit" value="Submit" />
// 			</form>
//             <br/>
//             {errorMessage}
//         </div>
//     )
// }

export function RegisterPage(): ReactElement{
    return(
        <p>
            Hell yeah
        </p>
    )
}