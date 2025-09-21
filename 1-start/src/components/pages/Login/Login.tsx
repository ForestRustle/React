import { useState } from 'react';
import Button from '../../Button/Button';
import Headling from '../../Headling/Headling';
import SearchForm from '../../SearchForm/SearchForm';
import { useUserContext } from '../../context/user.context';

export function Login() {
  const [name, setName] = useState('');
  const { addProfile } = useUserContext();
  
    const handleLogin = () => {
      if (name.trim().length === 0) {
        return
      };
      const newId = Date.now().toString();
      addProfile({ id: newId, name });
      setName('');
  };
  return (
    <div>
      <Headling title={'Вход'}></Headling>
      <SearchForm placeholder={'Ваше имя'} value={name}
      onInputChange ={e => setName(e.target.value)}></SearchForm>
      <Button onClick={handleLogin} text={'Войти в профиль'}></Button>
    </div>
  );
}
