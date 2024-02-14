import React, { ReactElement } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Card } from '../../models/Card';
import StrongLabelWithDesc from './StrongLabelWithDesc';

export default function CardDetailsPage(): ReactElement {
  const cardData = useLoaderData() as Card;
  // const attributes = cardData.attributes.map((value) => {
  // });

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex">
        <img src={cardData.url_picture} alt="CardPicture" className="w-full h-auto" />
        <div className="ml-6">
          <StrongLabelWithDesc label="Name" desc={cardData.name} />
          <StrongLabelWithDesc label="Type" desc={cardData.type.name} />
          {/* <StrongLabelWithDesc label="Attribute(s)" desc={cardData.attributes} /> */}
          <p className="text-lg leading-6">Line  2</p>
          <p className="text-lg leading-6">Line  3</p>
          <p className="text-lg leading-6">Line  4</p>
          <p className="text-lg leading-6">Line  5</p>
          <p className="text-lg leading-6">Line  6</p>
          <p className="text-lg leading-6">Line  7</p>
          <p className="text-lg leading-6">Line  8</p>
        </div>
      </div>
    </div>
  );
}
