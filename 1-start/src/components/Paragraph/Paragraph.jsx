import styles from './Paragraph.module.css';
import cs from 'classnames';

console.log(styles);

function Paragraph({ text, fontSize }) {
  const style = fontSize ? { fontSize } : {};
  return (
    <div className={cs(styles['paragraph-wrapper'])}>
      <p className={cs(styles.paragraph)} style={style}>
        {text}
      </p>
    </div>
  );
}

export default Paragraph;