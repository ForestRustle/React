import './SearchForm.css';
import React, { useState } from 'react';
import { SearchFormProps } from './SearchForm.props';

function SearchForm({ placeholder,onSearch, logo,children }: SearchFormProps) {
  const [inputData, setInputData] = useState('');

  const inputChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    setInputData(event.target.value);
    console.log(event.target.value);
  };
  const inputSubmit = (event:React.FormEvent<HTMLFormElement>) => {
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