import {useLoaderData } from 'react-router-dom';
import styles from './Movie.module.css';
import { useFavorites } from '../../context/favorites.context';
import { Film } from '../../../interface/film.interface';

export function Movie() {
  const movie = useLoaderData() as Film;
  const { toggleFavorite, isFavorite } = useFavorites();

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
          <p className={styles['movie-description']}>{movie.description}</p>
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
              <p className={styles['movie-details__text']}>{movie.title}</p>
            </div>
            <div className={styles['movie-details']}>
              <p className={styles['movie-details__title']}>Дата выхода</p>
              <p className={styles['movie-details__text']}>{movie.year}</p>
            </div>
            <div className={styles['movie-details']}>
              <p className={styles['movie-details__title']}>Длительность</p>
              <p className={styles['movie-details__text']}>
                {movie.duration} мин
              </p>
            </div>
            <div className={styles['movie-details']}>
              <p className={styles['movie-details__title']}>Жанр</p>
              <p className={styles['movie-details__text']}>
                {movie.genre?.join(', ')}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles['reviews']}>
        <h2 className={styles['reviews__title']}>Отзывы</h2>
        {movie.reviews?.map((review, index) => (
          <div key={index} className={styles['reviews__item']}>
            <div className={styles['reviews__comment-header']}>
              <p className={styles['reviews__comment-headling']}>
                {review.title || 'Без названия'}
              </p>
              <p className={styles['reviews__comment-date']}>
                {review.date || 'Дата неизвестна'}
              </p>
            </div>
            <div className={styles['reviews__comment']}>
              <p className={styles['reviews__comment-text']}>
                {review.text || 'Отзыв отсутствует'}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
