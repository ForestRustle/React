import { Film } from '../../interface/film.interface';
import Button from '../Button/Button';

interface CardsProps {
  dataFilms: Film[];
  favorites?: Film[];
  onToggleFavorite?: (film: Film) => void;
}

export default function Cards({
  dataFilms,
  favorites = [],
  onToggleFavorite,
}: CardsProps) {
  return (
    <div className="cards">
      {dataFilms.map((film) => {
        const isFavorite = favorites.some((f) => f.id === film.id);
        return (
          <div key={film.id} className="card">
            <h3>{film.title}</h3>
            <Button
              text={isFavorite ? 'Удалить из избранного' : 'В избранное'}
              onClick={() => onToggleFavorite && onToggleFavorite(film)}
            />
          </div>
        );
      })}
    </div>
  );
}
