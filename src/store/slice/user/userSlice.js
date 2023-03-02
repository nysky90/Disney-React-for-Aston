import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	user: {
		email: '',
		password: '',
		favorite: [],
		history: [],
	},
	isLogged: false,
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		init: (state) => state,
		login: (state, action) => {
			state.user = action.payload;
			state.isLogged = true;
		},
		logout: () => {
			return initialState;
		},
		registration: (state, action) => {
			state.user = action.payload;
			state.isLogged = false;
		},
		saveHistory: (state, action) => {
			state.user.history.push(action.payload);
		},
	},
});

export const { login, logout, registration, init, saveHistory } =
	userSlice.actions;
export default userSlice.reducer;

export const selectorHistory = (state) => state.user.user.history;
