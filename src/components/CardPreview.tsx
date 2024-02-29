import { SearchContext } from '@containers/layout/Layout';
import { TCardPreview } from '@models/Card';
import React, { ReactElement, useContext } from 'react';
import { NavLink } from 'react-router-dom';

export default function CardPreview({ id, url_picture }: TCardPreview): ReactElement {
  const { emptySearchResult, setDisabled } = useContext(SearchContext);

  return (
    <NavLink
      to={`/card/${id}`}
      onClick={() => {
        emptySearchResult();
        setDisabled(true);
      }}
    >
      <img src={url_picture} alt="CardPicture" className="w-72" />
    </NavLink>
  );
}
