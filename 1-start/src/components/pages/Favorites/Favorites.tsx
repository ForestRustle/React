import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../store/store';
import { clearFavorites } from '../../../store/favorites.slice';
import Cards from '../../Cards/Cards';
import Button from '../../Button/Button';
import Headling from '../../Headling/Headling';
import Paragraph from '../../Paragraph/Paragraph';

export function Favorites() {
  const dispatch = useDispatch();
  const { items: favorites, userName } = useSelector(
    (state: RootState) => state.favorites
  );

  const handleClear = () => {
    dispatch(clearFavorites());
  };

  return (
    <div>
      <Headling title="Избранное" />
      {favorites.length === 0 ? (
        <Paragraph text="У вас пока нет избранных фильмов." />
      ) : (
        <>
          <Button text="Очистить избранное" onClick={handleClear} />
          <Cards dataFilms={favorites} />
        </>
      )}
    </div>
  );
}
