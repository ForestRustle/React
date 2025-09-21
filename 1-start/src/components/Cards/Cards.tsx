import './Cards.css';
import { CardsProps } from './Cards.props';
import { Card } from '../Card/Card';

 function Cards({ dataFilms }: CardsProps) {
  return (
    <div className="cards">
      {dataFilms.map((film) => (
        <Card film={film} key={film.id } />
      )
      )}
    </div>
  );
}

export default Cards;