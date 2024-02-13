import { InputHTMLAttributes, ReactElement } from "react";

interface LabeledInputProps extends InputHTMLAttributes<HTMLInputElement>{
    label: string;
    name: string;
    type: string
}

export function LabeledInput({label, name, type, ...props}: LabeledInputProps): ReactElement{
    return(
        <label>
            {label}
            <input type={type} name={name} {...props} />
        </label>
    )
}