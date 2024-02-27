import { SearchContext } from '@containers/layout/Layout';
import { TCardPreview } from '@models/Card';
import React, { ReactElement, useContext } from 'react';
import { NavLink } from 'react-router-dom';

export default function CardPreview({ id, url_picture }: TCardPreview): ReactElement {
  const emptySearchResult = useContext(SearchContext);

  return (
    <NavLink to={`/card/${id}`} onClick={emptySearchResult}>
      <img src={url_picture} alt="CardPicture" className="w-72" />
    </NavLink>
  );
}
