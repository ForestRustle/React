import styles from './SearchForm.module.css';
import { useRef, useState } from 'react';
import Input from '../Input/Input';
import cs from 'classnames';

function SearchForm({ placeholder, onSearch, onLogin, logo, children }) {
  const [inputData, setInputData] = useState('');
  const [error, setError] = useState(false);
  const fieldRef = useRef(null);
  const errTimerRef = useRef(null);

  const inputChange = (event) => {
    setInputData(event.target.value);
    if (error) {
      setError(false);
    }
  };

  const inputSubmit = (event) => {
    event.preventDefault();

    if (!inputData.trim()) {
      setError(true);
      setInputData('');
      fieldRef.current?.focus();

      if (errTimerRef.current) {
        clearTimeout(errTimerRef.current);
      }

      errTimerRef.current = setTimeout(() => {
        setError(false);
      }, 2000);
      return;
    }

    if (onSearch) {
      onSearch(inputData);
    }

    if (onLogin) onLogin({ name: inputData });

    setInputData('');
    fieldRef.current?.focus();
  };

  return (
    <div className={cs(styles['search-row'])}>
      <form className={cs(styles['search-form'])} onSubmit={inputSubmit}>
        <div className={cs(styles['input-wrapper'])}>
          {logo && <span className={cs(styles['input-logo'])}>{logo}</span>}
          <Input
            type="text"
            className={cs(error && styles['error-text'])}
            placeholder={error ? 'Введите текст' : placeholder}
            value={inputData}
            onChange={inputChange}
            ref={fieldRef}
            error={error}
          />
          {children}
        </div>
      </form>
    </div>
  );
}

export default SearchForm;
