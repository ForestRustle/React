import styles from './Cards.module.css';
import cs from 'classnames';
import { useState } from 'react';
function Cards({ dataFilms }) {
  const [favorite, setFavorite] = useState([]);

  const addFilm = (id) => {
    setFavorite((prev) =>
      prev.includes(id)
        ? prev.filter((favId) => favId !== id) : [...prev, id]);
  };
  return (
    <div className={cs(styles.cards)}>
      {dataFilms.map((film) => {
        const isFavorite = favorite.includes(film.id);
      return (
        <div className={cs(styles.card)} key={film.id}>
          <div className={cs(styles['favorite-score'])}>
            <img src="./src/assets/star.svg" alt="Рейтинг" />
            <span>324</span>
          </div>
          <img
            className={cs(styles.card__img)}
            src={film.img}
            alt="Постер фильма"
          />
          <div>
            <p className={cs(styles.card__text)}>{film.title}</p>
            <button
              onClick={() => addFilm(film.id)}
              className={cs(styles.card__button)}
            >
              <img
                src={
                  isFavorite
                    ? './src/assets/favorite.svg'
                    : './src/assets/like.svg'
                }
                alt="Добавить в избранное"
                className="like"
              />
              {isFavorite ? 'В избранном' : 'Добавить в избранное'}
            </button>
          </div>
        </div>
      );
})}
  </div>
  );
}

export default Cards;