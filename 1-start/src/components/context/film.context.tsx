import { createContext, useContext, useState, ReactNode } from 'react';

interface Film {
  id: number;
  title: string;
  img: string;
}

interface FilmsContextType {
  films: Film[];
}

const FilmsContext = createContext<FilmsContextType | undefined>(undefined);

const initialFilms: Film[] = [
  { id: 1, title: 'Фильм 1', img: '/img1.jpg' },
  { id: 2, title: 'Фильм 2', img: '/img2.jpg' },
  { id: 3, title: 'Фильм 3', img: '/img3.jpg' },
];

export function FilmsContextProvider({ children }: { children: ReactNode }) {
  const [films] = useState<Film[]>(initialFilms);

  return (
    <FilmsContext.Provider value={{ films }}>{children}</FilmsContext.Provider>
  );
}

export function useFilms() {
  const context = useContext(FilmsContext);
  if (!context) {
    throw new Error('useFilms must be used inside FilmsContextProvider');
  }
  return context;
}
