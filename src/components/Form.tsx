import React, { DetailedHTMLProps, FormEvent, FormHTMLAttributes, PropsWithChildren, ReactElement } from "react";
import { PrimitiveTypes, useForm } from "@utils/UseForm";
import FormProvider from "@utils/FormProvider";

export interface FormProps extends PropsWithChildren<DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>>{
    handleSubmit : (data: Record<string,PrimitiveTypes>) => void;
    formDefaultValue : Record<string,PrimitiveTypes>;
}

const InnerForm = ({handleSubmit, formDefaultValue, children, ...props}: FormProps)=>{
    const {formState} = useForm();

    const onSubmit = (event: FormEvent<HTMLFormElement>, onSubmit: (data: Record<string, PrimitiveTypes>) => void) => {
        event.preventDefault();
        console.log(formState);
        onSubmit(formState);
    };

    return (<form onSubmit={(event) => {onSubmit(event, handleSubmit)}} {...props}>
        {children}
    </form>)
}

export default function Form({formDefaultValue: defaultValue, handleSubmit, children, ...props}: FormProps): ReactElement{
    return(
        <FormProvider>
            <InnerForm handleSubmit={handleSubmit} formDefaultValue={defaultValue} {...props}>
                {children}
            </InnerForm>
        </FormProvider>
    )
}