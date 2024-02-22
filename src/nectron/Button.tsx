import clsx from 'clsx';
import React, { PropsWithChildren, ReactElement } from 'react';

type ButtonWithChildren = PropsWithChildren<
React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
>;

interface ButtonProps extends ButtonWithChildren {
  className?: string;
}

export default function Button({
  children,
  className,
  ...props
}: ButtonProps): ReactElement {
  return (
    // eslint-disable-next-line react/button-has-type
    <button
      className={clsx(className, 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded')}
      {...props}
    >
      {children}
    </button>
  );
}
