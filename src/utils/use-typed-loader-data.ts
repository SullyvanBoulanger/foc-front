import { useLoaderData } from 'react-router-dom';

export interface TId {
  id: number;
}

export function useTypedLoaderData<T extends TId>(): T {
  return useLoaderData() as T;
}
