import { configureStore } from '@reduxjs/toolkit';
import userSlice from './slice/user/userSlice';
import { customMiddleware } from './middleware/customMiddleware';

export const store = configureStore({
	reducer: {
		user: userSlice,
	},
	middleware: [customMiddleware],
});
