import styles from './Header.module.css';
import cs from 'classnames';
import { useUserContext } from '../../components/context/user.context';

function Header() {
  const { data, logoutProfile } = useUserContext();
  const loggedInUser = data.find((el) => el.isLogined);
  console.log(loggedInUser);

  return (
    <header className={cs(styles.header)}>
      <img src="./bookmark.svg" alt="Логотип закладок" />
      <div className={cs(styles.header_links)}>
        <a href="#">Поиск фильмов</a>
        <a href="#">Мои фильмы</a>
        {loggedInUser ? (
          <div className={cs(styles.login)}>
            <a href="#" onClick={logoutProfile}>
              <span>{loggedInUser.name}</span>
              <img src="./user.svg" alt="Иконка пользователя" />
            </a>
            <div className={cs(styles.login)}>
              <button
                onClick={logoutProfile}
                className={cs(styles['header-btn'])}
                type="button"
              >
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