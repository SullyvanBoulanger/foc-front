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
import { PrimitiveTypes } from './PrimitiveTypes';

interface UserContextType {
  isLogged: boolean;
  handleSign: (
    url: string,
    data: Record<string, PrimitiveTypes>,
    messageIfSuccess?: string,
    messageIfError?: string,) => void;
  message: string;
}

export const UserContext = createContext<UserContextType>({
  isLogged: false,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  handleSign: (url: string, data: any, messageIfSuccess?: string, messageIfError?: string) => {},
  message: '',
});

interface UserProviderProps extends PropsWithChildren {
  refreshUrl: string
}

export default function UserProvider({ refreshUrl, children }: UserProviderProps): ReactElement {
  const { setToken } = useToken();
  const [isUserLogged, setUserLogged] = useState(false);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');

  const setLogged = (token: string) => {
    setJwtToken(token);
    setUserLogged(true);
  };

  const handleSign = (
    url: string,
    data: any,
    messageIfSuccess?: string,
    messageIfError?: string,
  ) => {
    api.post(url, data)
      .then((response) => {
        setLogged(response.data.jwt);
      })
      .catch((error) => {
        if (messageIfError) {
          setMessage(messageIfError);
        } else {
          setMessage(error);
        }
      });
  };

  const providerValue = useMemo<UserContextType>(
    () => (
      { isLogged: isUserLogged, handleSign, message }),
    [isUserLogged, setLogged],
  );

  useEffect(() => {
    if (!loading) return;

    api.get(refreshUrl)
      .then((data) => {
        setToken(data.data.jwt);
        setUserLogged(true);
      })
      .catch(() => {
        setToken(undefined);
        setUserLogged(false);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <UserContext.Provider value={providerValue}>
      {!loading && children}
    </UserContext.Provider>
  );
}

export const useUser = (): UserContextType => useContext(UserContext);
