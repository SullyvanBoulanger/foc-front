import React, { ChangeEvent, DetailedHTMLProps, FormHTMLAttributes, PropsWithChildren, ReactElement, createContext, useContext } from "react";
import { useForm } from "../utils/use-form";

export interface FormProps extends PropsWithChildren<DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>>{
    handleSubmit : (data: Record<string,string>) => void;
    initialState : Record<string,string>;
}

interface FormContextType{
    handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
    formState: Record<string, string>;
}

export const FormContext = createContext<FormContextType>({
    handleInputChange: (event: ChangeEvent<HTMLInputElement>) => {},
    formState: {}
});

export default function Form({initialState, handleSubmit, children, ...props}: FormProps): ReactElement{
    const {formState, handleInputChange, handleSubmit: handleSubmitForm} = useForm(initialState);

    return(
        <form onSubmit={(event) => {handleSubmitForm(event, handleSubmit)}} {...props}>
            <FormContext.Provider value={{handleInputChange, formState}}>
                {children}
            </FormContext.Provider>
        </form>
    )
}