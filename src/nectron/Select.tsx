import React, { DetailedHTMLProps, PropsWithChildren, ReactElement } from 'react';
import clsx from 'clsx';

export type SelectProps = PropsWithChildren<
DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>>;

export default function Select({ children, className, ...props }: SelectProps): ReactElement {
  return (
    <select className={clsx(className, 'text-black')} {...props}>
      {children}
    </select>
  );
}
