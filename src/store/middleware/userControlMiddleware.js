import {
	login,
	init,
	registration,
	logout,
	saveHistory,
	saveFavorite,
	deleteFavorite,
	setLogged,
} from '../slice/user/userSlice';
import {
	getLoggedUser,
	checkUserLogin,
	registerUser,
	clearLoggedUser,
	saveInLocalStorage,
	getComponentUser,
	checkDoubleData,
	deleteDataId,
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
				store.dispatch(setLogged('true'));
				return next(action);
			} else {
				return false;
			}
		case registration.type:
			if (registerUser(action.payload)) {
				store.dispatch(login(action.payload));
				return next(action);
			} else {
				return false;
			}
		case saveHistory.type:
			if (!checkDoubleData(action.payload, 'history')) {
				saveInLocalStorage(action.payload, 'history');
				return next(action);
			}
			break;
		case saveFavorite.type:
			if (!checkDoubleData(action.payload, 'favorite')) {
				saveInLocalStorage(action.payload, 'favorite');
				return next(action);
			}
			break;
		case deleteFavorite.type:
			if (checkDoubleData(action.payload, 'favorite')) {
				deleteDataId(action.payload);
				return next(action);
			}
			break;
		case logout.type:
			clearLoggedUser(store.getState());
			return next(action);
		default:
			next(action);
	}
};
