import CardPreviewComponent from '@components/CardPreview';
import { CardPreview } from '@models/Card';
import Strong from '@nectron/Strong';
import React, { ReactElement } from 'react';

interface ShowResultProps {
  result: CardPreview[] | undefined
}

export default function ShowResult({ result }: ShowResultProps): ReactElement {
  // eslint-disable-next-line react/jsx-no-useless-fragment
  if (!result) return <></>;
  return (
    <div className="flex flex-col justify-center items-center p-4">
      <Strong>
        Showing
        {' '}
        {result.length}
        {' '}
        results
      </Strong>
      <div className="flex flex-wrap items-center justify-center gap-2 p-4">
        {result.map((value) => <CardPreviewComponent {...value} />)}
      </div>
    </div>
  );
}
