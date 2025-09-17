import React, { JSX } from 'react';

export interface SearchFormProps {
  placeholder: string;
  onSearch?: (value: string) => void;
  value?: string;
  onInputChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  img?: string;
  logo?: string | JSX.Element;
  children?: JSX.Element;
  title?: string;
}
