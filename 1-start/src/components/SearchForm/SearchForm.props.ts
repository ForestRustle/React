import React, { JSX } from 'react';


export interface SearchFormProps {
  placeholder: string;
	onSearch?: (value: string) => void;
  img?: string;
  logo?: string | JSX.Element;
  children?: JSX.Element;
  title?: string
}
