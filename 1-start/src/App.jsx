import './App.css';
import FilmIcon from './icons/search-icon.svg?react';
import Headling from './components/Headling/Headling';
import Paragraph from './components/Paragraph/Paragraph';
import Button from './components/Button/Button';
import Header from './components/Header/Header';
import SearchForm from './components/SearchForm/SearchForm';
function App() {
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
        <SearchForm placeholder={'Введите название'} logo={<FilmIcon />}/>
        {/* <SearchForm placeholder={'Введите название'}/> */}
        <Button text={'Искать'} onClick={handleButtonClick} />
      </div>
    </div>
  );
}

export default App;
