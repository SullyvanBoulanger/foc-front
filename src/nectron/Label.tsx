import clsx from 'clsx';
import React, { DetailedHTMLProps, LabelHTMLAttributes, PropsWithChildren } from 'react';

export default function Label({
  children,
  className,
  ...props
}: PropsWithChildren<DetailedHTMLProps<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>>) {
  return (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label className={clsx(className, 'block mb-2 text-sm font-medium text-gray-900')} {...props}>
      {children}
    </label>
  );
}
