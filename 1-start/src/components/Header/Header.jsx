import styles from './Header.module.css';
import cs from 'classnames';

function Header({ user, logOut }) {
  return (
    <header className={cs(styles.header)}>
      <img src="./bookmark.svg" alt="Логотип закладок" />
      <div className={cs(styles.header_links)}>
        <a href="#">Поиск фильмов</a>
        <a href="#">Мои фильмы</a>
        {user ? (
          <div className={cs(styles.login)}>
            <a href="#" onClick={logOut}>
              <span>{user.name}</span>
              <img src="./user.svg" alt="Иконка пользователя" />
            </a>
            <div className={cs(styles.login)}>
              <button className={cs(styles['header-btn'])} type="submit">
                Выйти
              </button>
            </div>
          </div>
        ) : (
          <div className={cs(styles.login)}>
            <a href="#">
              Войти
              <img src="./login.svg" alt="Иконка логина" />
            </a>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
