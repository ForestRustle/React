import { useState } from "react";

export function useLocalStorage(key) {
	const [data, setData] = useState(() => {
		const res = localStorage.getItem(key);
		return res ? JSON.parse(res) : [];
	});

	const saveData = (newData) => {
		localStorage.setItem(key, JSON.stringify(newData));
		setData(newData);
	}
	const addProfile = (newProfile) => {
		const updateProfiles = data.map(el => ({
			...el,
			isLogined: false
		}));
		saveData([...updateProfiles, { ...newProfile, isLogined:true }]);
	}

	const loginProfile = (profileId) => {
		const updateProfiles = data.map(el =>
			el.id === profileId
				? { ...profileId, isLogined: true }
				: { ...profileId, isLogined: false }
		)
		saveData(updateProfiles);
	}
	const logoutProfile = () => {
		const updateProfiles = data.map(el =>
			el.isLogined ? { ...el, isLogined: false }:el
		)
		saveData(updateProfiles);
	}
	
	return [data,addProfile, loginProfile, logoutProfile]
}