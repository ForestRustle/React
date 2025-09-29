import Cards from '../../Cards/Cards';
import Headling from '../../Headling/Headling';
import SearchForm from '../../SearchForm/SearchForm';
import Button from '../../Button/Button';
import { useEffect, useState } from 'react';
import { Film, IFilm } from '../../../interface/film.interface';
import axios, { AxiosError } from 'axios';
import { Search } from '../../../helpers/API';
import { mapApiToFilm } from '../../../helpers/mappers';
import { useFilmSearch } from '../../../hooks/useFilmSearch';
import Paragraph from '../../Paragraph/Paragraph';

export function Home() {
  const { films, isLoading, error, handleSubmit } = useFilmSearch();

  return (
    <div className="headling">
      <Headling title={'Поиск'} />
      <Paragraph text={'Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.'} />
      <SearchForm
        logo={
          <img src={'/src/assets/icons/search-icon.svg'} alt="Поиск"></img>
        }
        placeholder={'Введите название'}
        onSearch={handleSubmit}
      >
        <Button text={'Найти'} />
      </SearchForm>
      {isLoading && <div>Идет загрузка...</div>}
      {error && <div>Произошла ошибка при загрузке данных: {error}</div>}
      {!isLoading && <Cards dataFilms={films} />}
    </div>
  );
}
