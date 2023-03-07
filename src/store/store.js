import { configureStore } from '@reduxjs/toolkit';
import userSlice from './slice/user/userSlice';
import { userControlMiddleware } from './middleware/userControlMiddleware';
import { disneyApi } from '../utils';

export const store = configureStore({
	reducer: {
		user: userSlice,
		[disneyApi.reducerPath]: disneyApi.reducer,
	},
	middleware: (getDefaultMiddlware) =>
		getDefaultMiddlware().concat(disneyApi.middleware, userControlMiddleware),
});
