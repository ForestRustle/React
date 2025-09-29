import styles from './Header.module.css';
import cs from 'classnames';
import { useUserContext } from '../../components/context/user.context';
import { Link, NavLink } from 'react-router-dom';
import { useFavorites } from '../context/favorites.context';

function Header() {
  const { data, logoutProfile } = useUserContext();
  const { favorites} = useFavorites();
  const loggedInUser = data.find((el) => el.isLogined);

  return (
    <header className={cs(styles.header)}>
      <Link to={'/favorites'}>
        <img src="/bookmark.svg" alt="Логотип закладок" />
      </Link>
      <div className={cs(styles.header_links)}>
        <NavLink to="/">Поиск фильмов</NavLink>
        <NavLink to="/favorites" className={cs(styles['header__counter'])}>Мои фильмы
          <span className={cs(styles.counter)}>{favorites.length}</span>
        </NavLink>
        {loggedInUser ? (
          <div className={cs(styles.login)}>
            <NavLink to="/profile" >
              <span>{loggedInUser.name}</span>
              <img src="./user.svg" alt="Иконка пользователя" />
            </NavLink>
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
            <NavLink to="/login">
              Войти
              <img src="/login.svg" alt="Иконка логина" />
            </NavLink>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;