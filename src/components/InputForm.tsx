import React, { ChangeEvent, ReactElement } from 'react';
import Input, { InputProps } from '@nectron/Input';
import { useField } from '@utils/UseForm';

interface InputFormProps extends InputProps {
  name: string
}

export default function InputForm({
  name,
  ...props
}: InputFormProps): ReactElement {
  const { value, setField } = useField(name);
  const { onChange, ...rest } = props;

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value: currentValue } = event.target;
    setField(currentValue);
    if (onChange) onChange(event);
  };

  return (
    <Input name={name} onChange={handleInputChange} value={value} {...rest} />
  );
}
