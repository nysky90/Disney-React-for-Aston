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
	},
});

export const { login, logout, registration, init } = userSlice.actions;
export default userSlice.reducer;
