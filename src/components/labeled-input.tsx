import React, { InputHTMLAttributes, ReactElement } from "react";

interface LabeledInputProps extends InputHTMLAttributes<HTMLInputElement>{
    label: string
}

export function LabeledInput({label, ...inputProps}: LabeledInputProps): ReactElement {
    return (
        <label>
            {label}
            <input {...inputProps} />
        </label>
    )
}