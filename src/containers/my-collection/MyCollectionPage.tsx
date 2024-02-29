import React, { ReactElement } from 'react';
import InfiniteScroll from '@utils/InfiniteScroll';
import { UserCardPreview } from '@models/Card';
import StackUserCard from './StackUserCard';

export default function MyCollectionPage(): ReactElement {
  const mapUserCard = (items: UserCardPreview[]) => items.map(
    (card) => <StackUserCard key={card.id} userCard={card} />,
  );

  return (
    <div className="flex flex-wrap p-4 items-center justify-center">
      <InfiniteScroll<UserCardPreview> url="/card/my_collection" mapFunction={mapUserCard} fetchOnMount />
    </div>
  );
}
