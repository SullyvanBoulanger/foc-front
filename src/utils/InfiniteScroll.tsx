/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { ReactElement, useEffect, useState } from 'react';
import { api } from './api';

interface InfiniteScrollProps<T> {
  url: string;
  mapFunction: (items: T[]) => JSX.Element[];
  fetchOnMount?: boolean;
}

export default function InfiniteScroll<T>({
  url,
  mapFunction,
  fetchOnMount = false,
}: InfiniteScrollProps<T>): ReactElement {
  const [items, setItems] = useState<T[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(0);

  const fetchData = () => {
    setIsLoading(true);
    setError(null);

    api.get(url, { params: { page } })
      .then((response) => {
        setItems((prevItems) => [...prevItems, ...response.data.content]);
        setPage((prevPage) => prevPage + 1);
      })
      .catch((fetchError) => setError(fetchError))
      .finally(() => setIsLoading(false));
  };

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop
      !== document.documentElement.offsetHeight
      || isLoading
    ) {
      return;
    }
    fetchData();
  };

  useEffect(() => {
    if (!fetchOnMount) return;
    fetchData();
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isLoading]);

  return (
    <>
      {mapFunction(items)}
      {isLoading && <p>Loading...</p>}
    </>
  );
}
