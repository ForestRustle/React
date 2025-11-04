import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserProfile {
	name: string;
	email: string;
  isLogined: boolean;
}

const initialState: UserProfile = {
	name: '',
	email: '',
	isLogined: false
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action:PayloadAction<{ name: string; email: string }>) {
      state.name = action.payload.name;
			state.email = action.payload.email;
			state.isLogined = true;
			localStorage.setItem('currentUser', JSON.stringify(action.payload));
		},
		logoutUser(state) {
			state.name = '';
			state.email = '';
			state.isLogined = false;
			localStorage.removeItem('currentUser');
		},
		restoreUser(state) {
			const storedUser = localStorage.getItem('currentUser');
			if (storedUser) {
				const user = JSON.parse(storedUser);
				state.name = user.name;
				state.email = user.email;
				state.isLogined = true;
			}
		},
	}
});

export const { setUser, logoutUser, restoreUser } = userSlice.actions;
export default userSlice.reducer;