import React, { PropsWithChildren, ReactElement, createContext } from 'react';

export const UserContext = createContext({});

export default function UserProvider({ children }: PropsWithChildren): ReactElement {
  return (
    <UserContext.Provider value="test">
      {children}
    </UserContext.Provider>
  );
}
