import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Film } from '../interface/film.interface';
import { RootState } from './store';
import { logoutUser, setUser } from './user.slice';

interface FavoritesState {
  items: Film[];
  userName: string | null;
}

const initialState: FavoritesState = {
  items: [],
  userName: null,
};

const getStorageKey = (name: string) => `favorites_${name}`;

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite(state, action: PayloadAction<Film>) {
      if (!state.userName) return;
      const exists = state.items.find((f) => f.id === action.payload.id);
      if (!exists) {
        state.items.push(action.payload);
        localStorage.setItem(
          getStorageKey(state.userName),
          JSON.stringify(state.items)
        );
      }
    },
    removeFavorite(state, action: PayloadAction<string>) {
      if (!state.userName) return;
      state.items = state.items.filter((f) => f.id !== action.payload);
      localStorage.setItem(
        getStorageKey(state.userName),
        JSON.stringify(state.items)
      );
    },
    toggleFavorite(state, action: PayloadAction<Film>) {
      if (!state.userName) return;
      const exists = state.items.find((f) => f.id === action.payload.id);
      if (exists) {
        state.items = state.items.filter((f) => f.id !== action.payload.id);
      } else {
        state.items.push(action.payload);
      }
      localStorage.setItem(
        getStorageKey(state.userName),
        JSON.stringify(state.items)
      );
    },
    clearFavorites(state) {
      if (state.userName) {
        localStorage.removeItem(getStorageKey(state.userName));
      }
      state.items = [];
    },
    loadFavorites(state, action: PayloadAction<string>) {
      const name = action.payload;
      const stored = localStorage.getItem(getStorageKey(name));
      state.userName = name;
      state.items = stored ? JSON.parse(stored) : [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(setUser, (state, action) => {
      const name = action.payload.name;
      const stored = localStorage.getItem(getStorageKey(name));
      state.userName = name;
      state.items = stored ? JSON.parse(stored) : [];
    });

    builder.addCase(logoutUser, (state) => {
      if (state.userName) {
        localStorage.removeItem(getStorageKey(state.userName));
      }
      state.items = [];
      state.userName = null;
    });
  },
});

export const {
  addFavorite,
  removeFavorite,
  toggleFavorite,
  clearFavorites,
  loadFavorites,
} = favoritesSlice.actions;

export default favoritesSlice.reducer;
