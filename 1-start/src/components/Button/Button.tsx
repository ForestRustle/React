import styles from './Button.module.css'; 
import { ButtonProps } from './Button.props';
import cn from 'classnames';


function Button({text, onClick, children,...props}:ButtonProps) {
  return (
      <button className={cn(styles.search)} onClick={onClick}{...props}>{children ?? text}</button>
  );
}

export default Button;