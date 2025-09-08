import './Cards.css';
import { useState } from 'react';
import { CardsProps } from './Cards.props';

function Cards({children, dataFilms }: CardsProps) {
  const [favorite, setFavorite] = useState<number[]>([]);

  const addFilm = (id:number): void => {
    setFavorite((prev) =>
      prev.includes(id)
        ? prev.filter((favId) => favId !== id) : [...prev, id]);
  };
  return (
    <div className="cards">
      {dataFilms.map((film) => {
        const isFavorite = favorite.includes(film.id);
      return(
      <div className="card" key={film.id}>
        <div className="favorite-score">
          <img src="./src/assets/star.svg" alt="Рейтинг" />
          <span>324</span>
        </div>
        <img
          className="card__img"
          src={film.img}
          alt="Постер фильма"
        />
        <div>
          <p className="card__text">{film.title}</p>
          <button onClick={()=>addFilm(film.id)} className="card__button">
            <img src ={isFavorite ? "./src/assets/favorite.svg" : "./src/assets/like.svg"}
              alt="Добавить в избранное"
              className="like"
            />
            {isFavorite ? "В избранном" : "Добавить в избранное"}
          </button>
        </div>
      </div>
      );
})}
  </div>
  );
}

export default Cards;