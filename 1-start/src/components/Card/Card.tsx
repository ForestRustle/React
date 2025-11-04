import styles from './Card.module.css';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { toggleFavorite } from '../../store/favorites.slice';
import { Film } from '../../interface/film.interface';

interface CardProps {
  film: Film;
}

export function Card({ film }: CardProps) {
  const dispatch = useDispatch();

  const { items: favorites } = useSelector(
    (state: RootState) => state.favorites
  );

  const isFavorite = favorites.some((f) => f.id === film.id);

  const handleToggle = () => {
    dispatch(toggleFavorite(film));
  };

  return (
    <div className={styles.card}>
      <Link to={`/movie/${film.id}`}>
        <div className={styles['favorite-score']}>
          <img src="/star.svg" alt="Рейтинг" />
          <span>{film.rating}</span>
        </div>
        <img
          src={film.img}
          alt={film.title}
          className={styles['favorite-score__cover']}
        />
        <p className={styles.card__text}>{film.title}</p>
      </Link>
      <button onClick={handleToggle} className={styles.card__button}>
        <img
          src={isFavorite ? '/favorite.svg' : '/like.svg'}
          alt="Добавить в избранное"
          className={styles.like}
        />
        {isFavorite ? 'В избранном' : 'Добавить в избранное'}
      </button>
    </div>
  );
}
