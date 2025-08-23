import styles from './SearchForm.module.css';
import { useState } from 'react';
import cs from 'classnames';

function SearchForm({ placeholder,onSearch, logo,children }) {
  const [inputData, setInputData] = useState('');

  const inputChange = (event) => {
    setInputData(event.target.value);
    console.log(event.target.value);
  };
  const inputSubmit = (event) => {
    event.preventDefault();
    if (onSearch) {
      onSearch(inputData);
    }
    console.log(inputData);
  };
  return (
    <div className={cs(styles['search-row'])}>
      <form className={cs(styles['search-form'])} onSubmit={inputSubmit}>
        <div className={cs(styles['input-wrapper'])}>
          {logo && <span className={cs(styles['input-logo'])}>{logo}</span>}
          <input
            type="text"
            className={cs(styles['search-form__input'])}
            placeholder={placeholder}
            value={inputData}
            onChange={inputChange}
          />
          {children}
        </div>
      </form>
    </div>
  );
}

export default SearchForm;