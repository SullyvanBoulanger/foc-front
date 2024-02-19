import { UserCardPreview } from '@models/Card';
import React, { ReactElement } from 'react';
import { useLoaderData } from 'react-router-dom';
import CardPreviewComponent from '@components/CardPreview';

export default function MyCollectionPage(): ReactElement {
  const cards = useLoaderData() as UserCardPreview[];

  const stackUserCard = ({ id, url_picture, quantity }: UserCardPreview) => {
    const cardsPreviews = [];
    for (let i = 0; i < quantity; i += 1) {
      cardsPreviews.push(
        <div className="p-1">
          <CardPreviewComponent id={id} url_picture={url_picture} />
        </div>,
      );
    }

    return cardsPreviews;
  };

  return (
    <div className="flex">
      {cards.map((card) => stackUserCard(card))}
    </div>
  );
}
