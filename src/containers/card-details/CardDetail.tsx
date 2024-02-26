import Strong from '@nectron/Strong';
import { PrimitiveTypes, isPrimitiveType } from '@utils/PrimitiveTypes';
import objectArrayToString from '@utils/objectArrayToString';
import React, { ReactElement } from 'react';

interface CardDetailProps<T> {
  label: string;
  desc: PrimitiveTypes | T[] | undefined;
  propertyName?: string;
}

export default function CardDetail<T>({
  label,
  desc,
  propertyName,
}: CardDetailProps<T>): ReactElement {
  let stat : PrimitiveTypes = '';

  if (desc !== undefined && isPrimitiveType(desc)) {
    stat = desc;
  } else if (desc && !isPrimitiveType(desc) && propertyName) {
    stat = objectArrayToString(desc as T[], propertyName);
  }

  return (
    <div>
      {stat !== '' && (
        <p className="text-lg leading-6 w-96">
          <Strong>
            {label}
            :
          </Strong>
          {' '}
          {stat}
        </p>
      )}
    </div>
  );
}
