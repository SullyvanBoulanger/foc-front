import CardPreview from '@components/CardPreview';
import { UserCardPreview } from '@models/Card';
import React, { Key, ReactElement } from 'react';

interface StackUserCardProps {
  key : Key;
  userCard : UserCardPreview
}

export default function StackUserCard({
  key,
  userCard: { quantity, ...card },
}: StackUserCardProps): ReactElement {
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {[...Array(quantity)].map(
        () => (
          <div key={key} className="p-1">
            <CardPreview {...card} />
          </div>
        ),
      )}
    </>
  );
}
