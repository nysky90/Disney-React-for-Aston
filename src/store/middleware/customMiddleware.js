/* eslint-disable no-fallthrough */
import { login, init, registration, logout } from '../slice/user/userSlice';
import {
	getLoggedUser,
	checkUserLogin,
	registerUser,
	clearLoggedUser,
} from '../../utils';

export const userControlMiddleware = (store) => (next) => (action) => {
	switch (action.type) {
		case init.type:
			const loggetUser = getLoggedUser();
			if (loggetUser) {
				store.dispatch(login(loggetUser));
			}
			return next(action);
		case login.type:
			if (checkUserLogin(action.payload)) {
				return next(action);
			}
			break;
		case registration.type:
			registerUser(action.payload);
			return next(action);
		case logout.type:
			clearLoggedUser();
			return next(action);
		default:
			next(action);
	}
};
