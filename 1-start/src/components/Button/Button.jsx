import styles from './Button.module.css';
import cs from 'classnames';
function Button({text, onClick}) {
  return (
      <button className={styles.search} onClick={onClick}>{text}</button>
  );
}

export default Button;