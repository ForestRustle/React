import type { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

interface RequireAuthProps {
  children: ReactNode;
}

export const RequireAuth = ({ children }: RequireAuthProps) => {
  const isLogined = useSelector((state: RootState) => state.user.isLogined);

  if (!isLogined) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};
