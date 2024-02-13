import React, { DetailedHTMLProps, LabelHTMLAttributes, PropsWithChildren } from "react";

export default function Label({
    children, 
    ...props
}: PropsWithChildren<DetailedHTMLProps<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>>){
    return (
        <label {...props}>
            {children}
        </label>
    )
}