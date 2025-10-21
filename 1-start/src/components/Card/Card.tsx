import styles from './Card.module.css';
import { useFavorites } from '../context/favorites.context';
import { Link } from 'react-router-dom';

interface Film {
  id: string;
  title: string;
  img: string;
  rating: number;
}

interface CardProps {
  film: Film;
}

export function Card({ film }: CardProps) {
  const { toggleFavorite, isFavorite } = useFavorites();
  const favorite = isFavorite(film.id);

  return (
    <div className={styles.card}>
      <Link to={`/movie/${film.id}`}>
        <div className={styles['favorite-score']}>
          <img src="./src/assets/star.svg" alt="Рейтинг" />
          <span>{film.rating}</span>
        </div>
        <img
          src={film.img}
          alt={film.title}
          className={styles['favorite-score__cover']}
        />
        <p className={styles.card__text}>{film.title}</p>
      </Link>
      <button
        onClick={() => toggleFavorite(film)}
        className={styles.card__button}
      >
        <img
          src={favorite ? './src/assets/favorite.svg' : './src/assets/like.svg'}
          alt="Добавить в избранное"
          className={styles.like}
        />
        {favorite ? 'В избранном' : 'Добавить в избранное'}
      </button>
    </div>
  );
}
