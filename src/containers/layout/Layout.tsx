/* eslint-disable @typescript-eslint/no-unused-vars */
import { TCardPreview } from '@models/Card';
import Button from '@nectron/Button';
import React, {
  Dispatch,
  ReactElement, SetStateAction, createContext, useMemo, useState,
} from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import InfiniteScroll from '@utils/InfiniteScroll';
import CardPreview from '@components/CardPreview';
// eslint-disable-next-line import/no-cycle
import SearchBar from './SearchBar';

interface SearchContextType {
  emptySearchResult : () => void;
  setDisabled : Dispatch<SetStateAction<boolean>>;
  setUrlQuery : Dispatch<SetStateAction<string>>;
}

export const SearchContext = createContext<SearchContextType>({
  emptySearchResult: () => null,
  setDisabled: () => null,
  setUrlQuery: () => null,
});

export default function Layout(): ReactElement {
  const [searchResult, setSearchResult] = useState<TCardPreview[]>();
  const [disabled, setDisabled] = useState(true);
  const [urlQuery, setUrlQuery] = useState('');

  const providedValues = useMemo(() => ({
    emptySearchResult: () => setSearchResult(undefined),
    setDisabled,
    setUrlQuery,
  }), []);

  return (
    <div>
      <SearchContext.Provider value={providedValues}>
        <div className="border-b-4 border-grey flex justify-between items-center h-1/10 w-screen p-2 box-border">
          <NavLink
            to="/my_collection"
            onClick={() => {
              providedValues.emptySearchResult();
              providedValues.setDisabled(true);
            }}
          >
            My collection
          </NavLink>
          <SearchBar setResult={setSearchResult} />
          <Button>
            Logout
          </Button>
        </div>
        {disabled && <Outlet />}
        <div className="flex flex-wrap items-center justify-center gap-2 p-4" hidden={disabled}>
          <InfiniteScroll<TCardPreview>
            url={urlQuery}
            mapFunction={(cards) => cards.map((card) => <CardPreview {...card} />)}
            disabled={disabled}
          />
        </div>
      </SearchContext.Provider>
    </div>
  );
}
