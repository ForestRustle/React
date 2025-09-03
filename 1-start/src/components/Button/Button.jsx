import { forwardRef } from 'react';
import styles from './Button.module.css';

const Button = forwardRef( function Button({text, onClick},ref) {
  return (
      <button ref={ref} className={styles.search} onClick={onClick}>{text}</button>
  );
})

export default Button;