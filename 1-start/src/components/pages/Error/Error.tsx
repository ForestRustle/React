import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { toggleFavorite } from '../../../store/favorites.slice';
import Cards from '../../Cards/Cards';
import Headling from '../../Headling/Headling';
import Paragraph from '../../Paragraph/Paragraph';
import SearchForm from '../../SearchForm/SearchForm';
import Button from '../../Button/Button';
import FilmIcon from '../../../assets/icons/search-icon.svg';
import styles from './Error.module.css';
import { useFilmSearch } from '../../../hooks/useFilmSearch';

export function Error() {
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
    <div className={styles.error}>
      <Headling title="Поиск">
        <Paragraph text="Введите название фильма, сериала или мультфильма для поиска и добавления в избранное." />
      </Headling>

      <SearchForm
        logo={<img src={FilmIcon} alt="Поиск" />}
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
            <div className={styles.error__notfound}>
              <h2 className={styles.error__title}>Упс... Ничего не найдено</h2>
              <p className={styles.error__text}>
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
