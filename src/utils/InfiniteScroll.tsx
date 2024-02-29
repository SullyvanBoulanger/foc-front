/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {
  ReactElement, useEffect, useRef, useState,
} from 'react';
import { api } from './api';

interface InfiniteScrollProps<T> {
  url: string;
  mapFunction: (items: T[]) => JSX.Element[];
  disabled?: boolean;
  fetchOnMount?: boolean;
}

export default function InfiniteScroll<T>({
  url,
  mapFunction,
  disabled = false,
  fetchOnMount = false,
}: InfiniteScrollProps<T>): ReactElement {
  const [items, setItems] = useState<T[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  // const [page, setPage] = useState(0);
  let page = 0;
  const observerTarget = useRef(null);

  const fetchData = () => {
    setIsLoading(true);
    setError(null);

    console.log(`FetchMore\nPage = ${page} and disabled = ${disabled}`);

    api.get(url, { params: { page } })
      .then((response) => {
        setItems((prevItems) => [...prevItems, ...response.data.content]);
        // setPage((prevPage) => prevPage + 1);
        page += 1;
      })
      .catch((fetchError) => setError(fetchError))
      .finally(() => setIsLoading(false));
  };

  // const handleScroll = () => {
  //   if (
  //     window.innerHeight + document.documentElement.scrollTop
  //     !== document.documentElement.offsetHeight
  //     || isLoading
  //   ) {
  //     return;
  //   }
  //   fetchData();
  // };

  useEffect(() => {
    if (!fetchOnMount) return;
    fetchData();
  }, []);

  useEffect(() => {
    if (disabled) return;
    setItems([]);
    // setPage(0);
    page = 0;
    console.log(`Reset\nPage = ${page}, disabled = ${disabled} and items = ${items}`);
    fetchData();
  }, [url, disabled]);

  // useEffect(() => {
  //   if (disabled) return;
  //   window.addEventListener('scroll', handleScroll);
  //   // eslint-disable-next-line consistent-return
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, [isLoading]);

  useEffect(() => {
    if (disabled) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          fetchData();
        }
      },
      { threshold: 1 },
    );

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    console.log('Page Down');
    // eslint-disable-next-line consistent-return
    return () => {
      if (observerTarget.current) {
        observer.unobserve(observerTarget.current);
      }
    };
  }, [observerTarget]);

  return (
    <>
      {!disabled && mapFunction(items)}
      {!disabled && isLoading && <p>Loading...</p>}
      <div ref={observerTarget} />
    </>
  );
}
