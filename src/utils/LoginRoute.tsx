import React, { PropsWithChildren, ReactElement } from 'react';
import { useUser } from './UserProvider';

export function Logged({ children }: PropsWithChildren): ReactElement | null {
  const { isLogged } = useUser();

  if (!isLogged) return null;
  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
}

export function Logout({ children }: PropsWithChildren): ReactElement | null {
  const { isLogged } = useUser();

  // eslint-disable-next-line react/jsx-no-useless-fragment
  if (!isLogged) return <>{children}</>;
  return null;
}
