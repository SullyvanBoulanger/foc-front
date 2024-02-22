import React, {
  PropsWithChildren, ReactElement,
  createContext, useContext, useMemo,
} from 'react';
import useStorage from './StorageHook';

interface TokenContextType {
  token: string | undefined;
  setToken: (item: string | undefined) => void;
}

const TokenContext = createContext<TokenContextType>({
  token: undefined,
  setToken: () => null,
});

export default function TokenProvider({ children }: PropsWithChildren): ReactElement {
  const [token, setToken] = useStorage('jwtToken');
  const value = useMemo(() => ({ token, setToken }), [token, setToken]);

  return (
    <TokenContext.Provider value={value}>
      {children}
    </TokenContext.Provider>
  );
}

export const useToken = (): TokenContextType => useContext(TokenContext);
