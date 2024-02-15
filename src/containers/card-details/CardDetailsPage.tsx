import React, { ReactElement } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Card } from '@models/Card';
import CardDetail from './CardDetail';

export default function CardDetailsPage(): ReactElement {
  const cardData = useLoaderData() as Card;

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex">
        <img src={cardData.url_picture} alt="CardPicture" className="w-auto h-auto" />
        <div className="ml-6">
          <CardDetail label="Name" desc={cardData.name} />
          <CardDetail label="Type" desc={cardData.type.name} />
          <CardDetail label="Cost" desc={cardData.cost} />
          <CardDetail label="Attribute(s)" desc={cardData.attributes} propertyName="name" />
          <CardDetail label="Race/Trait(s)" desc={cardData.raceTraits} propertyName="name" />
          <CardDetail label="ATK" desc={cardData.atk} />
          <CardDetail label="DEF" desc={cardData.def} />
          <CardDetail label="Text" desc={cardData.text} />
          <CardDetail label="Flavour" desc={cardData.flavour} />
          <CardDetail label="Set" desc={cardData.set.name} />
          <CardDetail label="ID" desc={cardData.game_id} />
          <CardDetail label="Rarity" desc={cardData.rarity.code} />
        </div>
      </div>
    </div>
  );
}
