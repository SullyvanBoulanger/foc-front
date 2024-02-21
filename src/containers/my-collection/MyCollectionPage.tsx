import { UserCardPreview } from '@models/Card';
import React, { ReactElement, useEffect, useState } from 'react';
import { api } from '@utils/api';
import StackUserCard from './StackUserCard';

export default function MyCollectionPage(): ReactElement {
  const [cards, setCards] = useState<UserCardPreview[]>([]);

  useEffect(() => {
    api.get('/card/my_collection').then((response) => setCards(response.data));
  }, []);

  return (
    <div className="flex flex-wrap">
      {cards.map((card) => <StackUserCard {...card} />)}
    </div>
  );
}
