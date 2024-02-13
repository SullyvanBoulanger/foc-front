import { DetailedHTMLProps, FormHTMLAttributes, PropsWithChildren, ReactElement, createContext } from "react";
import { useForm } from "../utils/use-form";

export interface FormProps<T> extends PropsWithChildren<DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>>{
    handleSubmit : (data: T) => void;
    initialState : T;
}

const FormContext = createContext({});

export default function Form<T>({initialState, handleSubmit, children, ...props}: FormProps<T>): ReactElement{
    const {handleInputChange, handleSubmit: handleSubmitForm} = useForm<T>(initialState);
    return(
        <form onSubmit={(event) => {handleSubmitForm(event, handleSubmit)}}>
            <FormContext.Provider value={handleInputChange}>
                {children}
            </FormContext.Provider>
        </form>
    )
}