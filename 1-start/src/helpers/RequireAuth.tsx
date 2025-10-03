import type { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useUserContext } from '../components/context/user.context';

export const RequireAuth = ({ children }: { children: ReactNode }) => {
  const { currentUser } = useUserContext();
  
  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }
  return children;
};
