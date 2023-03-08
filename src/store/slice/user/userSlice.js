import { createSelector, createSlice } from '@reduxjs/toolkit';

const initialState = {
	user: {
		email: '',
		password: '',
		favorite: [],
		history: [],
	},
	isLogged: false,
	existUser: false,
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
			state.isLogged = true;
		},
		saveHistory: (state, action) => {
			state.user.history.push(action.payload);
		},
		saveFavorite: (state, action) => {
			state.user.favorite.push(action.payload);
		},
		deleteFavorite: (state, action) => {
			state.user.favorite = state.user.favorite.filter(
				(item) => item !== action.payload
			);
		},
		setLogged: (state, action) => {
			state.isLogged = action.payload;
		},
	},
});

export const {
	login,
	logout,
	registration,
	init,
	saveHistory,
	saveFavorite,
	deleteFavorite,
	setLogged,
} = userSlice.actions;
export default userSlice.reducer;

export const selectorHistory = (state) => state.user.user.history;
const selectorFavoriteList = (state) => state.user.user.favorite;
export const selectorIsLogged = (state) => state.user.isLogged;

export const selectorFavorite = createSelector(
	selectorFavoriteList,
	(favorite) => {
		const result = [...favorite];
		result.sort((a, b) => a - b);
		return result;
	}
);
