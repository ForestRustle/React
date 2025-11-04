import { use, useEffect, type ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useUserContext } from '../components/context/user.context';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { restoreUser } from '../store/user.slice';

export const RequireAuth = ({ children }: { children: ReactNode }) => {
  const dispatch = useDispatch();
  const isLogined = useSelector((state: RootState) => state.user.isLogined)
  useEffect(() => {
    dispatch(restoreUser());
  },[dispatch]);
  
  if (!isLogined) {
    return <Navigate to="/login" replace />;
  }
  return children;
};
