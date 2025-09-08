import { JSX } from 'react';
import './Header.css';
function Header(): JSX.Element {
  return (
    <header className="header">
      <img src="./bookmark.svg" alt="Логотип закладок" />
      <div className="header_links">
        <a href="#">Поиск фильмов</a>
        <a href="#">Мои фильмы</a>
        <div className="login">
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
