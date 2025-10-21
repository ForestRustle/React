import { createContext, ReactNode, useEffect, useState } from 'react';
import { useLocalStorage } from '../../hooks/use-localStortage.hook';
import { useContext } from 'react';

interface Profile {
  id: string;
  name: string;
  isLogined: boolean;
}

interface UserContextType {
  data: Profile[];
  addProfile: (profile:Profile) => void;
  currentUser: Profile | null;
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
  const [data, setData] = useState<Profile[]>([])
  const [currentUser, setCurrentUser] = useState<Profile | null>(null)

  useEffect(() => {
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      const parseUser: Profile = JSON.parse(storedUser);
      setData([parseUser]);
      setCurrentUser(parseUser);
    }
  }, [])
  const addProfile = (profile: Profile) => { 
    const updated = [{ ...profile, isLogined: true }]
    setData(updated);
    setCurrentUser(profile);
    localStorage.setItem('currentUser', JSON.stringify(profile));
  }
  const logoutProfile = () => { 
    setData([]);
    setCurrentUser(null);
    localStorage.removeItem('currentUser');
  }
  return (
    <UserContext.Provider
      value={{
        data, addProfile, logoutProfile,
        currentUser
       }}
    >
      {children}
    </UserContext.Provider>
  );
};
