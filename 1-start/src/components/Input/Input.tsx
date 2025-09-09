import { forwardRef } from 'react';
import styles from './Input.module.css';
import cs from 'classnames';
import { InputProps } from './Input.props';

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { error, placeholder, className, ...props },
  ref
) {
  return (
    <input
      ref={ref}
      {...props}
      className={cs(
        styles['search-form__input'],
        error && styles['search-form__input-error'],
        className
      )}
      placeholder={placeholder}
    />
  );
});

export default Input;
