import React, { ChangeEvent, ReactElement } from 'react';
import Input, { InputProps } from '@nectron/Input';
import { useField } from '@utils/UseForm';

interface InputFormProps extends InputProps {
  name: string
}

export default function InputForm({
  name,
  onChange,
  ...props
}: InputFormProps): ReactElement {
  const { value, setField } = useField(name);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value: currentValue } = event.target;
    setField(currentValue);
    if (onChange) onChange(event);
  };

  return (
    <Input name={name} onChange={handleInputChange} value={value} {...props} />
  );
}
