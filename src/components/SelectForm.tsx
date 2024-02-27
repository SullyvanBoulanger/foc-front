import Select, { SelectProps } from '@nectron/Select';
import { useField } from '@utils/UseForm';
import React, { ChangeEvent, ReactElement } from 'react';

interface SelectFormProps extends SelectProps {
  name : string;
  options: string[];
}

export default function SelectForm({ name, options, ...props }: SelectFormProps): ReactElement {
  const { setField } = useField(name);

  const handleInputChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const { value: currentValue } = event.target;
    setField(currentValue);
  };

  return (
    <Select onChange={handleInputChange} name={name} {...props}>
      <option value="">...</option>
      {options.map((value) => <option value={value}>{value}</option>)}
    </Select>
  );
}
