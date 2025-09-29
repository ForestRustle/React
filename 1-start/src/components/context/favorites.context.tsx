import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";

export interface FavoriteMovie {
  id: string;
	title: string;
  img: string;
  rating: number
}

interface FavoritesContextType {
  favorites: FavoriteMovie[];
  toggleFavorite: (movie: FavoriteMovie) => void;
  isFavorite: (id: string) => boolean;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export const useFavorites = () => {
  const ctx = useContext(FavoritesContext);
  if (!ctx) throw new Error("FavoritesContext: нет провайдера!");
  return ctx;
};

export const FavoritesProvider = ({ children }: { children: ReactNode }) => {
  const [favorites, setFavorites] = useState<FavoriteMovie[]>(() => {
    try {
      const raw = localStorage.getItem('favorites');
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

 const toggleFavorite = (movie: FavoriteMovie) => {
   setFavorites((prev) =>
     prev.some((fav) => fav.id === movie.id)
       ? prev.filter((fav) => fav.id !== movie.id)
       : [...prev, movie]
   );
 };

  const isFavorite = (id: string) => favorites.some((fav) => fav.id === id);

  return (
    <FavoritesContext.Provider
      value={{ favorites, toggleFavorite, isFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};