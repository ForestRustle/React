import styles from './Favorites.module.css';
import { useFavorites } from '../../context/favorites.context';
import { Card } from '../../Card/Card';

export function Favorites() {
  const { favorites } = useFavorites();

  return (
    <div className={styles['favorites-wrapper']}>
      <h1>Избранное</h1>
      {favorites.length === 0 ? (
        <p>Нет избранных фильмов</p>
      ) : (
        <div className={styles['favorites-list']}>
            {favorites.map((film) => (
            <Card film={film} key={film.id}></Card>
          ))}
        </div>
      )}
    </div>
  );
}
