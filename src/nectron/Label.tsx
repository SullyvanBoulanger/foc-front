import React, { DetailedHTMLProps, LabelHTMLAttributes, PropsWithChildren } from 'react';

export default function Label({
  children,
  ...props
}: PropsWithChildren<DetailedHTMLProps<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>>) {
  return (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label className="block mb-2 text-sm font-medium text-gray-900" {...props}>
      {children}
    </label>
  );
}
