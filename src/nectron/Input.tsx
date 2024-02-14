import React, { InputHTMLAttributes } from 'react';

export type InputProps = InputHTMLAttributes<HTMLInputElement>;

export default function Input({
  children,
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input {...props} />
  );
}
