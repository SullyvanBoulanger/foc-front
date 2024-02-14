import React, { DetailedHTMLProps, FormEvent, FormHTMLAttributes, PropsWithChildren, ReactElement } from "react";
import { PrimitiveTypes, useForm } from "@utils/UseForm";
import FormProvider from "@utils/FormProvider";

type FormPropsWithChildren = PropsWithChildren<DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>>;

export interface FormProps extends Omit<FormPropsWithChildren, "defaultValue">{
    handleSubmit : (data: Record<string,PrimitiveTypes>) => void;
    defaultValue ?: Record<string,PrimitiveTypes>;
}

const InnerForm = ({handleSubmit, defaultValue, children, ...props}: FormProps)=>{
    const {formState} = useForm();

    const onSubmit = (event: FormEvent<HTMLFormElement>, onSubmit: (data: Record<string, PrimitiveTypes>) => void) => {
        event.preventDefault();
        onSubmit(formState);
    };

    return (<form onSubmit={(event) => {onSubmit(event, handleSubmit)}} {...props}>
        {children}
    </form>)
}

export default function Form({defaultValue, handleSubmit, children, ...props}: FormProps): ReactElement{
    return(
        <FormProvider>
            <InnerForm handleSubmit={handleSubmit} defaultValue={defaultValue} {...props}>
                {children}
            </InnerForm>
        </FormProvider>
    )
}