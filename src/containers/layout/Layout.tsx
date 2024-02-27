import { CardPreview } from '@models/Card';
import Button from '@nectron/Button';
import React, {
  ReactElement, createContext, useMemo, useState,
} from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import SearchBar from './SearchBar';
import ShowResult from './ShowResult';

export const SearchContext = createContext<() => void>(() => null);

export default function Layout(): ReactElement {
  const [searchResult, setSearchResult] = useState<CardPreview[]>();

  const emptySearchResult = useMemo(() => () => setSearchResult(undefined), []);

  return (
    <div>
      <SearchContext.Provider value={emptySearchResult}>
        <div className="border-b-4 border-grey flex justify-between items-center h-1/10 w-screen p-2 box-border">
          <NavLink to="/my_collection" onClick={emptySearchResult}>
            My collection
          </NavLink>
          <SearchBar setResult={setSearchResult} />
          <Button>
            Logout
          </Button>
        </div>
        {!searchResult && <Outlet />}
        <ShowResult result={searchResult} />
      </SearchContext.Provider>
    </div>
  );
}
