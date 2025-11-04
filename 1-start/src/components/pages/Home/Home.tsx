import { useFilmSearch } from '../../../hooks/useFilmSearch';
import Cards from '../../Cards/Cards';
import Headling from '../../Headling/Headling';
import SearchForm from '../../SearchForm/SearchForm';
import Button from '../../Button/Button';
import Paragraph from '../../Paragraph/Paragraph';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { toggleFavorite } from '../../../store/favorites.slice';

export function Home() {
  const dispatch = useDispatch();
  const { films, isLoading, error, handleSubmit } = useFilmSearch();
  const { name: currentUserName } = useSelector(
    (state: RootState) => state.user
  );
  const { items: favorites } = useSelector(
    (state: RootState) => state.favorites
  );

  const handleToggleFavorite = (film: (typeof films)[0]) => {
    if (!currentUserName) return; 
    dispatch(toggleFavorite(film));
  };

  return (
    <div className="headling">
      <Headling title="Поиск" />
      <Paragraph text="Введите название фильма, сериала или мультфильма для поиска и добавления в избранное." />

      <SearchForm
        logo={<img src="/src/assets/icons/search-icon.svg" alt="Поиск" />}
        placeholder="Введите название"
        onSearch={handleSubmit}
      >
        <Button text="Найти" />
      </SearchForm>

      {isLoading && <div>Идет загрузка...</div>}
      {error && <div>Произошла ошибка при загрузке данных: {error}</div>}

      {!isLoading && !error && (
        <>
          {films.length > 0 ? (
            <Cards
              dataFilms={films}
              favorites={favorites}
              onToggleFavorite={handleToggleFavorite}
            />
          ) : (
            <div>
              <h2>Упс... Ничего не найдено</h2>
              <p>
                Попробуйте изменить запрос или ввести более точное название
                фильма
              </p>
            </div>
          )}
        </>
      )}
    </div>
  );
}
