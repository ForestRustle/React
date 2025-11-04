import styles from './Header.module.css';
import cs from 'classnames';
import { Link, NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { logoutUser } from '../../store/user.slice';

function Header() {
  const dispatch = useDispatch();
  const { name, isLogined } = useSelector((state: RootState) => state.user);
  const { items: favorites } = useSelector(
    (state: RootState) => state.favorites
  );

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <header className={cs(styles.header)}>
      <Link to="/">
        <img src="/bookmark.svg" alt="Логотип закладок" />
      </Link>

      <div className={cs(styles.header_links)}>
        <NavLink to="/">Поиск фильмов</NavLink>
        <NavLink to="/favorites" className={cs(styles['header__counter'])}>
          Мои фильмы
          <span className={cs(styles.counter)}>{favorites.length}</span>
        </NavLink>

        {isLogined ? (
          <div className={cs(styles.login)}>
            <NavLink to="/profile">
              <span>{name}</span>
              <img src="/user.svg" alt="Иконка пользователя" />
            </NavLink>
            <button
              onClick={handleLogout}
              className={cs(styles['header-btn'])}
              type="button"
            >
              Выйти
            </button>
          </div>
        ) : (
          <div className={cs(styles.login)}>
            <NavLink to="/login">
              Войти
              <img src="/login.svg" alt="Иконка логина" />
            </NavLink>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
