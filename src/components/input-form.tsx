import { ReactElement } from "react";
import Input, { InputProps } from "../nectron/input";

interface InputFormProps extends InputProps {
    
}

export default function InputForm({
    children,
    ...props
}: InputProps): ReactElement{
    // TODO UseContext
    return (
        <Input {...props}>
            {children}
        </Input>
    );
}