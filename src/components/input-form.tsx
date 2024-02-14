import { ReactElement, useContext } from "react";
import Input, { InputProps } from "../nectron/input";
import { FormContext } from "./form";

interface InputFormProps extends InputProps {
    name: string
}

export default function InputForm({
    name,
    ...props
}: InputFormProps): ReactElement{
    const {formState, handleInputChange} = useContext(FormContext);

    return (
        <Input name={name} onChange={handleInputChange} value={formState[name]} {...props}/>
    );
}