import styes from './Header.module.css';
import cs from 'classnames';

function Header() {
  return (
    <header className={cs(styes.header)}>
      <img src="./bookmark.svg" alt="Логотип закладок" />
      <div className={cs(styes.header_links)}>
        <a href="#">Поиск фильмов</a>
        <a href="#">Мои фильмы</a>
        <div className={cs(styes.login)}>
          <a href="#">
            Войти
            <img src="./login.svg" alt="Иконка логина" />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
