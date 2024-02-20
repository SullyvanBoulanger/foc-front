import React, { ReactElement } from 'react';
import { useLoaderData } from 'react-router-dom';
import { CardDetails } from '@models/Card';
import CardDetail from './CardDetail';
import Quantity from './Quantity';

export default function CardDetailsPage(): ReactElement {
  const { card, quantity } = useLoaderData() as CardDetails;

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex">
        <img src={card.url_picture} alt="CardPicture" className="w-auto h-auto" />
        <div className="ml-6">
          <CardDetail label="Name" desc={card.name} />
          <CardDetail label="Type" desc={card.type.name} />
          <CardDetail label="Cost" desc={card.cost} />
          <CardDetail label="Attribute(s)" desc={card.attributes} propertyName="name" />
          <CardDetail label="Race/Trait(s)" desc={card.raceTraits} propertyName="name" />
          <CardDetail label="ATK" desc={card.atk} />
          <CardDetail label="DEF" desc={card.def} />
          <CardDetail label="Text" desc={card.text} />
          <CardDetail label="Flavour" desc={card.flavour} />
          <CardDetail label="Set" desc={card.set.name} />
          <CardDetail label="ID" desc={card.game_id} />
          <CardDetail label="Rarity" desc={card.rarity.code} />
          <Quantity defaultQuantity={quantity} cardId={card.id} />
        </div>
      </div>
    </div>
  );
}
