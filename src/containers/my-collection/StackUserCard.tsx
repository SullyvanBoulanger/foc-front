import CardPreviewComponent from '@components/CardPreview';
import { UserCardPreview } from '@models/Card';
import React, { ReactElement } from 'react';

export default function StackUserCard({ quantity, ...card }: UserCardPreview): ReactElement {
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {[...Array(quantity)].map(
        () => (
          <div className="p-1">
            <CardPreviewComponent {...card} />
          </div>
        ),
      )}
    </>
  );
}
