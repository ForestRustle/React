import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../../../store/user.slice';
import Button from '../../Button/Button';
import SearchForm from '../../SearchForm/SearchForm';
import Headling from '../../Headling/Headling';
import Paragraph from '../../Paragraph/Paragraph';

export function Login() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleLogin = () => {
    if (!name.trim()) return;
    dispatch(setUser({ name, email }));
    setName('');
    setEmail('');
  };

  return (
    <div>
      <Headling title="Вход" />
      <Paragraph text="Введите имя и email для входа" />
      <SearchForm
        placeholder="Ваше имя"
        value={name}
        onInputChange={(e) => setName(e.target.value)}
      />
      <SearchForm
        placeholder="Ваш email"
        value={email}
        onInputChange={(e) => setEmail(e.target.value)}
      />
      <Button text="Войти в профиль" onClick={handleLogin} />
    </div>
  );
}
