import { CardPreview } from '@models/Card';
import React, { ReactElement } from 'react';

export default function CardPreviewComponent({ id, url_picture }: CardPreview): ReactElement {
  return (
    <a href={`/card/${id}`}>
      <img src={url_picture} alt="CardPicture" className="w-72" />
    </a>
  );
}
