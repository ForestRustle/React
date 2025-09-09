import { createContext, ReactNode } from 'react';
import { useLocalStorage } from '../../hooks/use-localStortage.hook';
import { useContext } from 'react';

interface Profile {
  id: string;
  name: string;
  isLogined: boolean;
}

interface UserContextType {
  data: Profile[];
  addProfile: (newProfile: Omit<Profile, 'isLogined'>) => void;
  loginProfile: (profileId: string) => void;
  logoutProfile: () => void;
}

export const UserContext = createContext<UserContextType | undefined>(
  undefined
);

export function useUserContext() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('Contex not found');
  }
  return context;
}

export const UserContextProvider = ({ children }: { children: ReactNode }) => {
  const [data, addProfile, loginProfile, logoutProfile] =
    useLocalStorage('profiles');

  return (
    <UserContext.Provider
      value={{ data, addProfile, loginProfile, logoutProfile }}
    >
      {children}
    </UserContext.Provider>
  );
};
