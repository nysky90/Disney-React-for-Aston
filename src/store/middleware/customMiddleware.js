/* eslint-disable no-fallthrough */
import { login } from '../slice/user/userSlice';
import {
	getLoggedUser,
	checkUserLogin,
	registrationUser,
	clearLoggedUser,
} from '../../utils';

export const customMiddleware = (store) => (next) => (action) => {
	switch (action.type) {
		case 'user/init':
			const loggetUser = getLoggedUser();
			if (loggetUser) {
				store.dispatch(login(loggetUser));
			}
			return next(action);
		case 'user/login':
			if (checkUserLogin(action.payload)) {
				return next(action);
			}
			break;
		case 'user/registration':
			registrationUser(action.payload);
			return next(action);
		case 'user/logout':
			clearLoggedUser();
			return next(action);
		default:
			next(action);
	}
};
