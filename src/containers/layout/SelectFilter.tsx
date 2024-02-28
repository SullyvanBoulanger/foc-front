import SelectForm from '@components/SelectForm';
import Label from '@nectron/Label';
import Option from '@nectron/Option';
import React, { ReactElement } from 'react';

interface SelectFilterProps {
  label: string;
  name: string;
  options?: string[];
}

export default function SelectFilter({
  label,
  name,
  options = [],
}: SelectFilterProps): ReactElement {
  return (
    <Label>
      {label}
      <SelectForm multiple name={name}>
        {options.map((value) => (
          <Option>
            {value}
          </Option>
        ))}
      </SelectForm>
    </Label>
  );
}
