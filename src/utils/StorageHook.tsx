import {
  useState, useEffect, type SetStateAction, Dispatch,
} from 'react';

export default function useStorage(key: string, initialValue?: string)
  :[string | undefined, Dispatch<SetStateAction<string | undefined>>] {
  const [value, setValue] = useState(
    () => localStorage.getItem(key) ?? initialValue,
  );

  useEffect(() => {
    if (value === undefined && localStorage.getItem(key)) {
      localStorage.removeItem(key);
      return;
    }

    if (value === undefined) return;

    localStorage.setItem(key, value);
  }, [key, value]);

  return [value, setValue];
}
