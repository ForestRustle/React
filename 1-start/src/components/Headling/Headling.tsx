import styles from './Headling.module.css';
import cn from 'classnames';
import type { HeadlingProps } from './Headling.props';
import Paragraph from '../Paragraph/Paragraph';

function Headling({title,text}: HeadlingProps) {
  return (
    <div className={cn(styles.headling)}>
      <h1 className={cn(styles['headling-title']) }>{title}</h1>
      {text && <Paragraph
        text={
          'Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.'
        }
      /> }
  
    </div>
  );
}

export default Headling;
