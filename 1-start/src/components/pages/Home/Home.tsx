import Cards from '../../Cards/Cards';
import Headling from '../../Headling/Headling';
import SearchForm from '../../SearchForm/SearchForm';
import Button from '../../Button/Button';
import { useFilmSearch } from '../../../hooks/useFilmSearch';
import Paragraph from '../../Paragraph/Paragraph';
import styles from './Home.module.css';

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
      {!isLoading && !error && (
        <>
          {films.length > 0 ? (
            <Cards dataFilms={films} />
          ) : (
            <div className={styles.error__notfound}>
              <h2 className={styles.error__title}>Упс... Ничего не найдено</h2>
            </div>
          )}
        </>
      )}
    </div>
  );
}
