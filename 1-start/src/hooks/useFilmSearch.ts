import { useEffect, useState } from 'react';
import axios, { AxiosError } from 'axios';
import { Search } from '../helpers/API';
import { Film, IFilm } from '../interface/film.interface';
import { mapApiToFilm } from '../helpers/mappers';

interface SearchResponse {
  ok: boolean;
  description: IFilm[];
}

export function useFilmSearch() {
  const [films, setFilms] = useState<Film[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>();
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleSubmit = (query: string) => {
    setSearchQuery(query);
	};
	
  useEffect(() => {
    if (!searchQuery) {
      return;
    }
    const getFilms = async (query: string) => {
      try {
        setIsLoading(true);
        setError(undefined);
        const { data } = await axios.get<SearchResponse>(`${Search}${query}`);
        setFilms(data.description.map(mapApiToFilm));
      } catch (error) {
        if (error instanceof AxiosError) {
          setError(error.message);
        }
        console.error(error);
      } finally {
        setIsLoading(false);
			}
    };
		getFilms(searchQuery);
  }, [searchQuery]);
	return { films, isLoading, error, handleSubmit };
}
