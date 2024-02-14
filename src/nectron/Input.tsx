import React, { InputHTMLAttributes, PropsWithChildren } from "react";

export type InputProps
    = PropsWithChildren<InputHTMLAttributes<HTMLInputElement>>;

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