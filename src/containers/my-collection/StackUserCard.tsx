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
        () => (
          <div className="p-1">
            <CardPreview {...card} />
          </div>
        ),
      )}
    </>
  );
}
