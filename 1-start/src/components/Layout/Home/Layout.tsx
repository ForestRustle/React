import styles from './Layout.module.css';
import Header from '../../Header/Header';
import { Outlet } from 'react-router-dom';
import cn from 'classnames';

export function Layout() {
  return (
    <div className={cn(styles.wrapper)}>
      <Header />
      <Outlet />
    </div>
  );
}
