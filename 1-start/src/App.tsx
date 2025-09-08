import './App.css';
import FilmIcon from './assets/icons/search-icon.svg';
import Headling from './components/Headling/Headling.tsx';
import Paragraph from './components/Paragraph/Paragraph.tsx';
import Button from './components/Button/Button.tsx';
import Header from './components/Header/Header.tsx';
import SearchForm from './components/SearchForm/SearchForm.tsx';
import Cards from './components/Cards/Cards.tsx';
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
  const handleButtonClick = () => {
    console.log('Button clicked');
  };

  return (
    <div className="wrapper">
      <Header />
      <Headling />
      <Paragraph
        text={
          'Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.'
        }
      />
      <div className="search-row">
        <SearchForm placeholder={'Введите название'} logo={<FilmIcon />}>
          <Button text={'Искать'} onClick={handleButtonClick} />
        </SearchForm>
        {/* <SearchForm placeholder={'Введите название'}/> */}
      </div>
      <Cards dataFilms={dataFilms} />
    </div>
  );
}

export default App;
