import type { ReactNode } from 'react';

export interface Film {
  id: number;
  title: string;
  img: string;
}
export interface CardsProps {
  children?: ReactNode;
  text?: string;
  dataFilms: Film[];
}
