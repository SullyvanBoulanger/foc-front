import Select, { SelectProps } from '@nectron/Select';
import { useField } from '@utils/UseForm';
import React, { ChangeEvent, ReactElement } from 'react';

export interface SelectFormProps extends SelectProps {
  name : string;
}

export default function SelectForm({
  name, onChange, children, ...props
}: SelectFormProps): ReactElement {
  const { setField } = useField(name);

  const handleInputChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const { options: selectedOptions } = event.target;
    let fieldValue = '';
    Array.from(selectedOptions).filter((option) => option.selected).forEach((option) => {
      if (fieldValue === '') {
        fieldValue = option.value;
      } else {
        fieldValue += `,${option.value}`;
      }
    });

    setField(fieldValue);
    if (onChange) onChange(event);
  };

  return (
    <Select onChange={handleInputChange} name={name} {...props}>
      {children}
    </Select>
  );
}
