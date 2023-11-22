import { createSlice } from '@reduxjs/toolkit';

const LoginSlice = createSlice({
	name: 'login',
	initialState: {
		token: '',
		isLoggedin: false,
	},
	reducers: {
		login: (state, action) => {
			state.isLoggedin = true;
			state.token = action.payload.token;
			sessionStorage.setItem('access_Token', action.payload.token);
		},
		logout: (state, action) => {
			state.token = '';
			state.isLoggedin = false;
			sessionStorage.removeItem('access_Token');
		},
	},
});
export default LoginSlice.reducer;
export const { login, logout } = LoginSlice.actions;
