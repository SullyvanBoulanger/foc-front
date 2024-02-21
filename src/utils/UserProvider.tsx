import React, {
  PropsWithChildren,
  ReactElement,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { useToken } from './TokenProvider';
import { api, setJwtToken } from './api';

interface UserContextType {
  isLogged: boolean;
  setIsLogged: (token: string) => void
}

export const UserContext = createContext<UserContextType>({
  isLogged: false,
  setIsLogged: () => false,
});

export default function UserProvider({ children }: PropsWithChildren): ReactElement {
  const { setToken } = useToken();
  const [isUserLogged, setUserLogged] = useState(false);
  const [loading, setLoading] = useState(true);

  const setIsLogged = (token: string) => {
    setJwtToken(token);
    setUserLogged(true);
  };

  const providerValue = useMemo<UserContextType>(
    () => (
      { isLogged: isUserLogged, setIsLogged }),
    [isUserLogged, setIsLogged],
  );

  useEffect(() => {
    api.get('/auth/refresh')
      .then((data) => {
        setToken(data.data.jwt);
        setUserLogged(true);
      })
      .catch(() => {
        setToken(undefined);
        setUserLogged(false);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <UserContext.Provider value={providerValue}>
      {!loading && children}
    </UserContext.Provider>
  );
}

export const useUser = (): UserContextType => useContext(UserContext);
