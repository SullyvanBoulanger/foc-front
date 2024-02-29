import CardPreview from '@components/CardPreview';
import { UserCardPreview } from '@models/Card';
import React, { ReactElement } from 'react';

interface StackUserCardProps {
  userCard : UserCardPreview
}

export default function StackUserCard({
  userCard: { quantity, ...card },
}: StackUserCardProps): ReactElement {
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {[...Array(quantity)].map(
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        (_val, id) => (
          <div className="p-1">
            {/* eslint-disable-next-line react/no-array-index-key */}
            <CardPreview key={`${card.id}-${id}`} {...card} />
          </div>
        ),
      )}
    </>
  );
}
