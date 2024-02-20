import { setJwtToken } from './api';

export default function useUser() {
  const handleLoginRegister = (jwt: string) => {
    setJwtToken(jwt);
  };

  return [handleLoginRegister];
}
