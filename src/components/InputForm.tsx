import { ChangeEvent, ReactElement, useContext } from "react";
import Input, { InputProps } from "@nectron/Input";
import { useField } from "@utils/UseForm";

interface InputFormProps extends InputProps {
    name: string
}

export default function InputForm({
    name,
    ...props
}: InputFormProps): ReactElement{
    const {value, setField} = useField(name);

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setField(value);
    };

    return (
        <Input name={name} onChange={handleInputChange} value={value} {...props}/>
    );
}