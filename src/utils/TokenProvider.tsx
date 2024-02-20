import React, {
  Dispatch, PropsWithChildren, ReactElement, SetStateAction, createContext, useContext, useMemo,
} from 'react';
import useStorage from './StorageHook';

interface TokenContextType {
  token: string | undefined;
  setToken: Dispatch<SetStateAction<string | undefined>>;
}

const TokenContext = createContext<TokenContextType>({
  token: undefined,
  setToken: () => null,
});

export default function TokenProvider({ children }: PropsWithChildren): ReactElement {
  const [token, setToken] = useStorage('token');
  const value = useMemo(() => ({ token, setToken }), [token, setToken]);

  return (
    <TokenContext.Provider value={value}>
      {children}
    </TokenContext.Provider>
  );
}

export const useToken = (): TokenContextType => useContext(TokenContext);
