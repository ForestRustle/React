import { useState } from 'react';

interface Profile {
  id: string;
  name: string;
  isLogined: boolean;
}
export function useLocalStorage(key:string) {
  const [data, setData] = useState<Profile[]>(() => {
    const res = localStorage.getItem(key);
    return res ? JSON.parse(res) as Profile[] : [];
  });

  const saveData = (newData:Profile[]) => {
    localStorage.setItem(key, JSON.stringify(newData));
    setData(newData);
  };
  const addProfile = (newProfile:Omit<Profile, 'isLogined'>) => {
    const updateProfiles = data.map((el) => ({
      ...el,
      isLogined: false,
    }));
    saveData([...updateProfiles, { ...newProfile, isLogined: true }]);
  };

  const loginProfile = (profileId:string) => {
    const updateProfiles = data.map((el) =>
      el.id === profileId
        ? { ...el, isLogined: true }
        : { ...el, isLogined: false }
    );
    saveData(updateProfiles);
  };
  const logoutProfile = () => {
    const updateProfiles = data.map((el) =>
      el.isLogined ? { ...el, isLogined: false } : el
    );
    saveData(updateProfiles);
  };

  return [data, addProfile, loginProfile, logoutProfile] as const;
}
