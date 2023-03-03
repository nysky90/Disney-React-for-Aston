/* eslint-disable no-fallthrough */
import {
	login,
	init,
	registration,
	logout,
	saveHistory,
	saveFavorite,
} from '../slice/user/userSlice';
import {
	getLoggedUser,
	checkUserLogin,
	registerUser,
	clearLoggedUser,
	saveInLSHistory,
	getComponentUser,
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
				const historyData = getComponentUser(action.payload, 'history');
				const favoriteData = getComponentUser(action.payload, 'favorite');
				let user = action.payload;
				user.history = [...historyData];
				user.favorite = [...favoriteData];
				console.log(user);
				return next(action);
			}
			break;
		case registration.type:
			registerUser(action.payload);
			return next(action);
		case saveHistory.type:
			saveInLSHistory(action.payload);
			return next(action);
		case saveFavorite.type:
			return next(action);
		case logout.type:
			clearLoggedUser(store.getState());
			return next(action);
		default:
			next(action);
	}
};
