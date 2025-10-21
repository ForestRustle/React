export interface IFilm {
  '#TITLE': string;
  '#YEAR': number;
  '#IMDB_ID': string;
  '#RANK': number;
  '#ACTORS': string;
  '#AKA': string;
  '#IMDB_URL': string;
  '#IMDB_IV': string;
  '#IMG_POSTER': string;
  photo_width: number;
  photo_height: number;
}

export interface Film {
  id: string;
  title: string;
  year: number;
  img: string;
  rating: number;
  actors: string[];
  imdbUrl: string;
  description?: string;
  genre?: string[];
  duration?: number;
  dateCreated?: string;
  reviews?: Review[];
}

export interface FilmDetails { 
  id: string;
  title: string;
  year: number;
  img: string;
  rating: number;
  actors: string[];
  imdbUrl: string;
  description: string;
  reviews: Review[];
  genre: string[];
  dateCreated: string;
  duration: number;
}

export interface Review { 
  author: string;
  date: string;
  text: string;
  rating: number;
  title?: string;
}