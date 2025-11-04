import './App.css';
import FilmIcon from './assets/icons/search-icon.svg';
import Headling from './components/Headling/Headling.tsx';
import Paragraph from './components/Paragraph/Paragraph.tsx';
import Button from './components/Button/Button.tsx';
import Header from './components/Header/Header.tsx';
import SearchForm from './components/SearchForm/SearchForm.tsx';
import Cards from './components/Cards/Cards.tsx';
import { useLocalStorage } from './hooks/use-localStortage.hook';
import { UserContextProvider } from './components/context/user.context';
import { useDispatch } from 'react-redux';
import { AppDispatch } from './store/store.ts';
import { use, useEffect } from 'react';
import { restoreUserWithFavorites } from './store/user.slice.ts';
function App() {
  const dispatch = useDispatch<AppDispatch>();
  
  useEffect(() => {
    dispatch(restoreUserWithFavorites());
  }, [dispatch]);
  
  const handleButtonClick = () => {
    console.log('Button clicked');
  };

  return (
    <UserContextProvider>
      <div className="wrapper">
        <Header />
        <Headling />
        <Paragraph
          text={
            'Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.'
          }
        />
        <div className="search-row">
          <SearchForm
            placeholder={'Введите название'}
            logo={<img src={FilmIcon}></img>}
          >
            <Button text={'Искать'} onClick={handleButtonClick} />
          </SearchForm>
        </div>

        <div className="search-row">
          <SearchForm placeholder={'Ваше имя'}>
            <Button text={'Войти в профиль'} onClick={handleButtonClick} />
          </SearchForm>
        </div>
        <Cards dataFilms={dataFilms} />
      </div>
    </UserContextProvider>
  );
}

export default App;
