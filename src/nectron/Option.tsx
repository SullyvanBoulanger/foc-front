import React, { DetailedHTMLProps, PropsWithChildren, ReactElement } from 'react';

type OptionProps = PropsWithChildren<
DetailedHTMLProps<React.OptionHTMLAttributes<HTMLOptionElement>, HTMLOptionElement>>;

export default function Option({ children, ...props }: OptionProps): ReactElement {
  return (
    <option {...props}>
      {children}
    </option>
  );
}
