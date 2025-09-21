import './SearchForm.css';
import React, { useState } from 'react';
import { SearchFormProps } from './SearchForm.props';

function SearchForm({ placeholder, onSearch, logo, children, value, onInputChange }: SearchFormProps) {
  const inputSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if(onSearch) {
      onSearch(inputData);
    } 
  };
  const [inputData, setInputData] = useState('');
  
  return (
    <form className="search-form" onSubmit={inputSubmit}>
      <div className="input-wrapper">
        {logo && <span className='input-logo'>{logo}</span>}
      <input
        type="text"
        className="search-form__input"
        placeholder={placeholder}
        value={value}
        onChange={onInputChange}
        />
      {children}
      </div>
    </form>
  );
}

export default SearchForm;