import { CardPreview } from '@models/Card';
import Button from '@nectron/Button';
import React, { PropsWithChildren, ReactElement, useState } from 'react';
import SearchBar from './SearchBar';
import ShowResult from './ShowResult';

export default function Layout({ children }: PropsWithChildren): ReactElement {
  const [searchResult, setSearchResult] = useState<CardPreview[]>();

  return (
    <div>
      <div className="border-b-4 border-grey flex justify-between items-center h-1/10 w-screen p-2 box-border">
        <a href="/my_collection">
          My collection
        </a>
        <SearchBar setResult={setSearchResult} />
        <Button>
          Logout
        </Button>
      </div>
      {!searchResult && children}
      <ShowResult result={searchResult} />
    </div>
  );
}
