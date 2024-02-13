import React, { InputHTMLAttributes, PropsWithChildren } from "react";

export interface InputProps 
    extends PropsWithChildren<InputHTMLAttributes<HTMLInputElement>>{}

export default function Input({
    children, 
    ...props
}: InputProps){
    return (
        <input {...props}>
            {children}
        </input>
    )
}