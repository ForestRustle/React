import { useEffect, useState } from "react";

export function useLocalStorage(key) {
	const [data, setData] = useState();

	useEffect(() => {
		const res = localStorage.getItem(key);
		if (res) {
			setData(JSON.parse(res));
		}
	}, [key]);

	const saveData = (newData) => {
		localStorage.setItem(key, JSON.stringify(newData));
		setData(newData);
	}
	
	const deleteData = () => {
		localStorage.removeItem(key);
		setData(null)
	}
	return [data,saveData,deleteData]
}