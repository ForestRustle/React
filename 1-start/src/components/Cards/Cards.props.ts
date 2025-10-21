import type { ReactNode } from 'react';

export interface Film {
  id: string;
  title: string;
  img: string;
  rating: number;
}
export interface CardsProps {
  children?: ReactNode;
  text?: string;
  dataFilms: Film[];
}
