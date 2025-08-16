import './Button.css';
function Button({text, onClick}) {
  return (
      <button className='search' onClick={onClick}>{text}</button>
  );
}

export default Button;