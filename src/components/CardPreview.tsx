import { SearchContext } from '@containers/layout/Layout';
import { CardPreview } from '@models/Card';
import React, { ReactElement, useContext } from 'react';
import { NavLink } from 'react-router-dom';

export default function CardPreviewComponent({ id, url_picture }: CardPreview): ReactElement {
  const emptySearchResult = useContext(SearchContext);

  return (
    <NavLink to={`/card/${id}`} onClick={emptySearchResult}>
      <img src={url_picture} alt="CardPicture" className="w-72" />
    </NavLink>
  );
}
