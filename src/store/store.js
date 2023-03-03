import { configureStore } from '@reduxjs/toolkit';
import userSlice from './slice/user/userSlice';
import { userControlMiddleware } from './middleware/customMiddleware';

export const store = configureStore({
	reducer: {
		user: userSlice,
	},
	middleware: [userControlMiddleware],
});

store.subscribe(() => {
	console.log(store.getState().user.user);
});
