import { useFilmSearch } from '../../../hooks/useFilmSearch';
import Button from '../../Button/Button';
import Cards from '../../Cards/Cards';
import Headling from '../../Headling/Headling';
import Paragraph from '../../Paragraph/Paragraph';
import SearchForm from '../../SearchForm/SearchForm';
import styles from './Error.module.css';

export function Error() {
  const { films, isLoading, error, handleSubmit } = useFilmSearch();

  return (
    <div className={styles.error}>
      <Headling title={'Поиск'}>
        <Paragraph
          text={
            'Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.'
          }
        />
      </Headling>
      <SearchForm
        logo={<img src={'/src/assets/icons/search-icon.svg'} alt="Поиск"></img>}
        placeholder={'Введите название'}
        onSearch={handleSubmit}
      >
        <Button text={'Найти'} type="submit" />
      </SearchForm>

      {isLoading && <div>Идет загрузка...</div>}
      {error && <div>Произошла ошибка при загрузке данных: {error}</div>}
      {!isLoading && !error && (
        <>
          {films.length > 0 ? (
            <Cards dataFilms={films} />
          ) : (
            <div className={styles.error__notfound}>
              <h2 className={styles.error__title}>Упс... Ничего не найдено</h2>
              <p className={styles.error__text}>
                Попробуйте изменить запрос или ввести более точное&nbsp;
                название фильма
              </p>
            </div>
          )}
        </>
      )}
    </div>
  );
}
