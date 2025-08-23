import styles from './Headling.module.css';
import cs from 'classnames';

function Headling() {
  return (
    <>
      <h1 className={cs(styles.headling) }>Поиск</h1>
    </>
  );
}

export default Headling;
