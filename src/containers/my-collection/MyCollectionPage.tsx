import { UserCardPreview } from '@models/Card';
import React, { ReactElement } from 'react';
import { useLoaderData } from 'react-router-dom';
import StackUserCard from './StackUserCard';

export default function MyCollectionPage(): ReactElement {
  const cards = useLoaderData() as UserCardPreview[];

  return (
    <div className="flex flex-wrap">
      {cards.map((card) => <StackUserCard {...card} />)}
    </div>
  );
}
