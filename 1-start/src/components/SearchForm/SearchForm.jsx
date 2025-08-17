import './SearchForm.css';
import { useState } from 'react';

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
    <form className="search-form" onSubmit={inputSubmit}>
      <div className="input-wrapper">
        {logo && <span className='input-logo'>{logo}</span>}
      <input
        type="text"
        className="search-form__input"
        placeholder={placeholder}
        value={inputData}
        onChange={inputChange}
        />
      {children}
      </div>
    </form>
  );
}

export default SearchForm;