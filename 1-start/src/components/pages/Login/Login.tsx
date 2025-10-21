import { useState } from 'react';
import Button from '../../Button/Button';
import Headling from '../../Headling/Headling';
import SearchForm from '../../SearchForm/SearchForm';
import { useUserContext } from '../../context/user.context';
import { useNavigate } from 'react-router-dom';

export function Login() {
  const [name, setName] = useState('');
  const { addProfile, data } = useUserContext();
  const navigate = useNavigate();
  
  const handleLogin = () => {
    if (name.trim().length === 0) {
      return;
    }
    const newUser = { id: Date.now().toString(), name, isLogined: true };
    addProfile(newUser);
    setName('');
    navigate('/');
  };
  return (
    <div>
      <Headling title={'Вход'}></Headling>
      <SearchForm
        placeholder={'Ваше имя'}
        value={name}
        onInputChange={(e) => setName(e.target.value)}
      ></SearchForm>
      <Button onClick={handleLogin} text={'Войти в профиль'}></Button>
    </div>
  );
}
