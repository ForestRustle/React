import { useState } from 'react';
import Button from '../../Button/Button';
import Headling from '../../Headling/Headling';
import SearchForm from '../../SearchForm/SearchForm';
import { useDispatch } from 'react-redux';
import { setUser } from '../../../store/user.slice';
import { useNavigate } from 'react-router-dom';

export function Login() {
  const [name, setName] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (name.trim().length === 0) return;
    dispatch(setUser({ name, email: '' }));
    setName('');
    navigate('/');
  };

  return (
    <div>
      <Headling title={'Вход'} />
      <SearchForm
        placeholder={'Ваше имя'}
        value={name}
        onInputChange={(e) => setName(e.target.value)}
        onSearch={() => handleLogin()}
      >
        <Button onClick={handleLogin} text={'Войти в профиль'} />
      </SearchForm>
    </div>
  );
}
