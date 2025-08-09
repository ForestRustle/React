import './App.css';
import Headling from './components/Headling/Headling';
import Paragraph from './components/Paragraph/Paragraph';
import Button from './components/Button/Button';
function App() {
  return (
    <>
      <Headling />
      <Paragraph text={'Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.'}/>
      <Button />
    </>
  );
}

export default App;
