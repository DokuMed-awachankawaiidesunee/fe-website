import { createContext } from 'react';
import type { User } from '../utils/interfaces';

interface UserContextValue {
  user: User | undefined;
  loading: boolean;
  setUser: React.Dispatch<React.SetStateAction<User | undefined>>;
  login: () => void;
  logout: () => void;
}

export const UserContext = createContext<UserContextValue>({
  user: undefined,
  loading: true,
  setUser: () => {},
  login: () => {},
  logout: () => {}
});