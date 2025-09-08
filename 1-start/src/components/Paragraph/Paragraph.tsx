import './Paragraph.css';
import { ParagraphProps } from './Paragraph.props';

function Paragraph({ text, fontSize }: ParagraphProps) {
  const style = fontSize ? { fontSize: fontSize } : {};
  return (
    <>
      <p className='paragraph' style={style}>
        {text}
      </p>
    </>
  );
}

export default Paragraph;