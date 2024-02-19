import { CardPreview } from '@models/Card';
import React, { ReactElement } from 'react';
import { NavLink } from 'react-router-dom';

export default function CardPreviewComponent({ id, url_picture }: CardPreview): ReactElement {
  return (
    <NavLink to={`/card/${id}`}>
      <img src={url_picture} alt="CardPicture" />
    </NavLink>
  );
}
