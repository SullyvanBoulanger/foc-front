import React, { ReactElement } from 'react';

interface StrongLabelWithDescProps {
  label: string;
  desc: string;
}

export default function StrongLabelWithDesc({
  label,
  desc,
}: StrongLabelWithDescProps): ReactElement {
  return (
    <p className="text-lg leading-6">
      <strong>
        {label}
        :
      </strong>
      {' '}
      {desc}
    </p>
  );
}
