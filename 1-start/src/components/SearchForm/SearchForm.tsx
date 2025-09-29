import './SearchForm.css';
import React, { useState } from 'react';
import { SearchFormProps } from './SearchForm.props';

function SearchForm({ placeholder, onSearch, logo, children }: SearchFormProps) {
  const [inputData, setInputData] = useState('');
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if(onSearch) {
      onSearch(inputData.trim());
    } 
  };
  
  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <div className="input-wrapper">
        {logo && <span className='input-logo'>{logo}</span>}
      <input
        type="text"
        className="search-form__input"
        placeholder={placeholder}
        value={inputData}
        onChange={(e)=> setInputData(e.target.value)}
        />
      {children}
      </div>
    </form>
  );
}

export default SearchForm;