import Input, { InputProps } from '@nectron/Input';
import Select from '@nectron/Select';
import { useField } from '@utils/UseForm';
import React, { ChangeEvent, ReactElement, useState } from 'react';

interface InputStatFormProps extends InputProps {
  name: string;
}

export default function InputStatForm({
  name,
  ...props
} : InputStatFormProps): ReactElement {
  const { setField } = useField(name);
  const [inputValue, setInputValue] = useState<string>('');
  const [operator, setOperator] = useState(':');

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value: currentValue } = event.target;
    setInputValue(currentValue);
    setField(currentValue === '' ? '' : `${operator}${currentValue}`);
  };

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const { value: currentValue } = event.target;
    setOperator(currentValue);
    setField(inputValue === '' ? '' : `${currentValue}${inputValue}`);
  };

  return (
    <div className="flex">
      <Select onChange={handleSelectChange}>
        <option value=":">=</option>
        <option value=">">{'>'}</option>
        <option value="<">{'<'}</option>
      </Select>
      <Input name={name} type="number" onChange={handleInputChange} value={inputValue} {...props} />
    </div>
  );
}
