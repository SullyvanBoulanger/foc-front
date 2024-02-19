import CardPreviewComponent from '@components/CardPreview';
import { UserCardPreview } from '@models/Card';
import React, { ReactElement } from 'react';

export default function StackUserCard({ quantity, ...card }: UserCardPreview): ReactElement {
  const cardsPreviews = [];
  for (let i = 0; i < quantity; i += 1) {
    cardsPreviews.push(
      <div className="p-1">
        <CardPreviewComponent {...card} />
      </div>,
    );
  }
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      { cardsPreviews }
    </>
  );
}
