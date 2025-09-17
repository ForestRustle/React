import Cards from '../../Cards/Cards';
import films from '../../../data/dataFilm';
import Headling from '../../Headling/Headling';
import SearchForm from '../../SearchForm/SearchForm';
import Button from '../../Button/Button';

export function Home() {
	return (
    <div className="headling">
      <Headling title={'Поиск'} />
      <SearchForm 
        logo={<img src={'./src/assets/icons/search-icon.svg'}></img>}
        placeholder={'Введите название'}
      >
        <Button text={'Найти'}/>
      </SearchForm>
      <Cards dataFilms={films} />
    </div>
  );
}
