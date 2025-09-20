import { useParams } from 'react-router-dom';
import styles from './Movie.module.css';
import { CardsProps } from '../../Cards/Cards.props';
import { useFavorites } from '../../context/favorites.context';

type MovieProps = Pick<CardsProps, 'dataFilms'>;

export function Movie({ dataFilms }: MovieProps) {
  const { toggleFavorite, isFavorite } = useFavorites();
  const { id } = useParams();
  if (!dataFilms || !Array.isArray(dataFilms)) {
    return <div>Фильмы не найдены</div>;
  }
  const movie = dataFilms.find((dataFilms) => dataFilms.id === Number(id));

  if (!movie) {
    return (
      <div className="not-found">
        <h2 className="not-found__title">Упс... Ничего не найдено</h2>
        <p className="not-found__text">
          Попробуйте изменить запрос или ввести более точное название фильма
        </p>
      </div>
    );
  }
  return (
    <div className={styles['movie-wrapper']}>
      <div className={styles['result-seacrh']}>
        <p className={styles['result-seacrh__title']}>Поиск фильмов</p>
        <p className={styles['result-seacrh__film']}>{movie.title}</p>
      </div>
      <div className={styles['main-content']}>
        <img
          className={styles['movie-img']}
          src={movie.img}
          alt={`Постер фильма ${movie.title}`}
        />
        <div className={styles['movie-info']}>
          <p className={styles['movie-description']}>
            After the devastating events of Avengers: Infinity War, the universe
            is in ruins due to the efforts of the Mad Titan, Thanos. With the
            help of remaining allies, the Avengers must assemble once more in
            order to undo Thanos' actions and restore order to the universe once
            and for all, no matter what consequences may be in store.
          </p>
          <div className={styles['movie-rating']}>
            <span className={styles.rating}>
              <img src="/src/assets/star.svg" alt="Иконка избранного" />
              {movie.rating}
            </span>
            <button
              className={styles['favorite-button']}
              onClick={() => toggleFavorite(movie)}
            >
              <img
                src={
                  isFavorite(movie.id)
                    ? '/src/assets/favorite.svg'
                    : '/src/assets/like.svg'
                }
                alt="Добавить в избранное"
                className="like"
              />
              {isFavorite(movie.id) ? 'В избранном' : 'В избранное'}
            </button>
          </div>
          <div className={styles['movie-details-wrapper']}>
            <div className={styles['movie-details']}>
              <p className={styles['movie-details__title']}>Тип</p>
              <p className={styles['movie-details__text']}>Movie</p>
            </div>
            <div className={styles['movie-details']}>
              <p className={styles['movie-details__title']}>Дата выхода</p>
              <p className={styles['movie-details__text']}>2019-04-24</p>
            </div>
            <div className={styles['movie-details']}>
              <p className={styles['movie-details__title']}>Длительность</p>
              <p className={styles['movie-details__text']}>181 мин</p>
            </div>
            <div className={styles['movie-details']}>
              <p className={styles['movie-details__title']}>Жанр</p>
              <p className={styles['movie-details__text']}>
                Adventure, Science Fiction, Action
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles['reviews']}>
        <h2 className={styles['reviews__title']}>Отзывы</h2>
        <div className={styles['reviews__item']}>
          <div className={styles['reviews__comment-header']}>
            <p className={styles['reviews__comment-headling']}>
              Not as good as infinity war..
            </p>
            <p className={styles['reviews__comment-date']}>2019-04-29</p>
          </div>
          <div className={styles['reviews__comment']}>
            <p className={styles['reviews__comment-text']}>
              But its a pretty good film. A bit of a mess in some parts, lacking
              the cohesive and effortless feel infinity war somehow managed to
              accomplish. Some silly plot holes and characters that
              could&apos;ve been cut (Ahem, captain marvel and thanos). The use
              of Captain marvel in this film was just ridiculous. Shes there at
              the start, bails for some reason? And then pops up at the end to
              serve no purpose but deux ex machina a space ship...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
