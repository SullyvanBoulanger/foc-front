import React, { PropsWithChildren, ReactElement } from 'react';

type ButtonWithChildren = PropsWithChildren<
React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
>;

export default function Button({ children, ...props }: ButtonWithChildren): ReactElement {
  return (
    // eslint-disable-next-line react/button-has-type
    <button {...props}>
      {children}
    </button>
  );
}
