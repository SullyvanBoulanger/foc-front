import {
  useState,
} from 'react';

export default function useStorage(key: string, initialValue?: string)
  :[string | undefined, (item: string | undefined) => void] {
  const [value, setValue] = useState(
    () => localStorage.getItem(key) ?? initialValue,
  );

  const setItem = (item: string | undefined) => {
    setValue(item);
    if (item === undefined && localStorage.getItem(key)) {
      localStorage.removeItem(key);
      return;
    }

    if (item === undefined) return;

    localStorage.setItem(key, item);
  };

  return [value, setItem];
}
