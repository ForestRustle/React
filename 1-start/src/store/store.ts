import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user.slice';
import favoriteReducer from './favorites.slice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    favorites:favoriteReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

