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
import { api } from './api';
import { PrimitiveTypes } from './PrimitiveTypes';

interface UserContextType {
  isLogged: boolean;
  signin: (data: Record<string, PrimitiveTypes>) => void;
  signup: (data: Record<string, PrimitiveTypes>) => void;
  message: string;
}

export const UserContext = createContext<UserContextType>({
  isLogged: false,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  signin: (data: Record<string, PrimitiveTypes>) => {},
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  signup: (data: Record<string, PrimitiveTypes>) => {},
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
    setToken(token);
    setUserLogged(true);
  };

  const sign = (
    url: string,
    data: any,
    messageIfSuccess?: string,
    messageIfError?: string,
  ) => {
    api.post(url, data)
      .then((response) => {
        setLogged(response.data.token);
        if (messageIfSuccess) setMessage(messageIfSuccess);
      })
      .catch((error) => {
        if (messageIfError) {
          setMessage(messageIfError);
        } else {
          setMessage(error);
        }
      });
  };

  const signin = (data: Record<string, PrimitiveTypes>) => sign('/auth/signin', data, '', 'Your identifiants are incorrect');
  const signup = (data: Record<string, PrimitiveTypes>) => {
    if (data.passwordConfirmation && data.password !== data.passwordConfirmation) {
      setMessage('Your passwords do no match');
      return;
    }
    const { passwordConfirmation, ...body } = data;
    sign('/auth/signup', body, 'Register successfully');
  };

  const providerValue = useMemo<UserContextType>(
    () => (
      {
        isLogged: isUserLogged, signin, signup, message,
      }),
    [isUserLogged, setLogged],
  );

  useEffect(() => {
    if (!loading) return;

    api.get(refreshUrl)
      .then((response) => {
        setLogged(response.data.token);
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
