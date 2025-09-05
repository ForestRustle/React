import './App.css';
import FilmIcon from './icons/search-icon.svg?react';
import Headling from './components/Headling/Headling';
import Paragraph from './components/Paragraph/Paragraph';
import Button from './components/Button/Button';
import Header from './components/Header/Header';
import SearchForm from './components/SearchForm/SearchForm';
import Cards from './components/Cards/Cards';
import { useLocalStorage } from './hooks/use-localStortage.hook';
import { UserContextProvider } from './components/context/user.context';

function App() {
  const dataFilms = [
    {
      id: 1,
      title: 'Black Widow',
      img: './src/assets/img/Black_Widow.png',
    },
    {
      id: 2,
      title: 'Shang Chi',
      img: './src/assets/img/Schang Chi.png',
    },
    {
      id: 3,
      title: 'Loki',
      img: './src/assets/img/Loki.png',
    },
    {
      id: 4,
      title: 'How I Met Your Mother',
      img: './src/assets/img/How_I_Met_Your_Mother.png',
    },
    {
      id: 5,
      title: 'Money Heist',
      img: './src/assets/img/Money Heist.png',
    },
    {
      id: 6,
      title: 'Friends',
      img: './src/assets/img/Friends.png',
    },
    {
      id: 7,
      title: 'The Big Bang Theory',
      img: './src/assets/img/The Big Bang Theory.png',
    },
    {
      id: 8,
      title: 'Two And a Half Men',
      img: './src/assets/img/Two And a Half Men.png',
    },
  ];
  const [profiles, addProfile, loginProfile, logoutProfile] =
    useLocalStorage('profiles');
  const user = profiles.find((profile) => profile.isLogined);

  function saveUser(userData) {
    const id = userData.id || Date.now().toString();
    addProfile({ ...userData, id });
  }

  function logOut() {
    logoutProfile();
  }

  return (
    <UserContextProvider>
      <div className="wrapper">
        <Header/>
        <Headling />
        <Paragraph
          text={
            'Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.'
          }
        />
        <div className="search-row">
          <SearchForm placeholder={'Введите название'} logo={<FilmIcon />}>
            <Button text={'Искать'} />
          </SearchForm>
        </div>

        <div className="search-row">
          <SearchForm
            placeholder={'Ваше имя'}
            logo={<FilmIcon />}
            onLogin={saveUser}
          >
            <Button text={'Войти в профиль'} />
          </SearchForm>
        </div>

        <Cards dataFilms={dataFilms} />
      </div>
    </UserContextProvider>
  );
}

export default App;
