import React, { DetailedHTMLProps, PropsWithChildren, ReactElement } from 'react';

export default function Strong({
  children,
}: PropsWithChildren<DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>):
  ReactElement {
  return (
    <strong>
      {children}
    </strong>
  );
}
