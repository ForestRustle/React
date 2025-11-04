import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Film } from '../interface/film.interface';

interface FavoritesState {
  items: Film[];
}

const initialState: FavoritesState = {
  items: JSON.parse(localStorage.getItem('favorites') || '[]'),
};

export const favoriteSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite(state, action: PayloadAction<Film>) {
      const exists = state.items.find((f) => f.id === action.payload.id);
      if (!exists) {
        state.items.push(action.payload);
        localStorage.setItem('favorites', JSON.stringify(state.items));
      }
    },
    removeFavotites(state, action: PayloadAction<Film>) {
      state.items = state.items.filter((f) => f.id !== action.payload.id);
      localStorage.setItem('favorites', JSON.stringify(state.items));
    },
    toggleFavorites(state, action: PayloadAction<Film>) {
      const exists = state.items.find((f) => f.id === action.payload.id);
      if (exists) {
        state.items = state.items.filter((f) => f.id !== action.payload.id);
      } else {
        state.items.push(action.payload);
      }
      localStorage.setItem('favorites', JSON.stringify(state.items));
		},
		clearFavorites(state) {
			state.items = [];
			localStorage.removeItem('favorites');
		}
  },
});


export const { addFavorite, removeFavotites, toggleFavorites, clearFavorites } = favoriteSlice.actions
export default favoriteSlice.reducer