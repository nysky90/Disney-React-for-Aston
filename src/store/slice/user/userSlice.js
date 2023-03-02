import { createSlice } from '@reduxjs/toolkit';
import { getHistoryUser } from '../../../utils';

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
			const userHistory = getHistoryUser(action.payload);
			state.user = action.payload;
			state.user.history.push(...userHistory);
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

export const storeHistory = (state) => state.user.user.history;
