import { createContext } from "react"; 
import { useLocalStorage } from '../../hooks/use-localStortage.hook'

export const UserContext = createContext({
	userArray: [],
}) 
	
export const UserContextProvider = ({ children }) => {
	const [data, addProfile, loginProfile, logoutProfile] = useLocalStorage(
'profiles'
	);
	
	return (
    <UserContext.Provider
      value={{ data, addProfile, loginProfile, logoutProfile }}
    >
      {children}
    </UserContext.Provider>
  );
}