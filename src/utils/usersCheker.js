const getUsersData = (place = 'usersData') => {
	return JSON.parse(localStorage.getItem(place));
};

const setUsersData = (place, data) => {
	localStorage.setItem(place, JSON.stringify(data));
};

const setLocalData = () => {
	getUsersData() || setUsersData('usersData', []);
};

export const getLoggedUser = () => {
	setLocalData();
	const loggedUser = getUsersData('isLogged')
		? getUsersData('authorizedUser')
		: '';
	return loggedUser;
};
//проверка email и пароля на совпадение
export const checkUserLogin = (userData) => {
	const checkUsers = getUsersData();
	const checkValueMatch = checkUsers.some(
		({ email, password }) =>
			email === userData.email && password === userData.password
	);
	if (checkValueMatch) {
		setLoggedUser(checkUsers, userData);
		return checkValueMatch;
	}
};
//устанавливаем текущего пользователя в ЛХ
const setLoggedUser = (users, user) => {
	const loggedUser = users.filter(({ email }) => email === user.email);
	setUsersData('isLogged', true);
	setUsersData('authorizedUser', ...loggedUser);
};
//сохраняем информацию в локальном хранилище.
export const saveInLocalStorage = (data, direct) => {
	const authorizedUser = getUsersData('authorizedUser');
	const usersData = getUsersData();

	authorizedUser[direct].push(data);
	const newUsersData = usersData.filter(
		(item) => item.email !== authorizedUser.email
	);
	newUsersData.push(authorizedUser);
	setUsersData('authorizedUser', authorizedUser);
	setUsersData('usersData', newUsersData);
};
//достаем данные пользователя
export const getComponentUser = (userData, directory) => {
	const checkUsers = getUsersData();
	const loggedUser = checkUsers.filter(({ email }) => email === userData.email);
	return loggedUser[0][directory];
};
//регистрация пользователя с проверкой на наличие одинаковых email
export const registerUser = (userData) => {
	const oldLocalStorage = getUsersData('usersData');
	const checkEmail = oldLocalStorage.some(
		({ email }) => email === userData.email
	);
	if (!checkEmail) {
		oldLocalStorage.push(userData);
		setUsersData('usersData', oldLocalStorage);
	}
};
//проработать нейминг стора!!!
const replaceUserData = (user) => {
	const usersData = getUsersData();
	const newUserData = usersData.filter(
		(item) => item.email !== user.user.user.email
	);
	newUserData.push(user.user.user);
	setUsersData('usersData', newUserData);
};
//проверка на дубликат
export const checkDoubleData = (data, directory) => {
	const authorizedUser = getUsersData('authorizedUser');
	return authorizedUser[directory].some((id) => id === data);
};
//удаляем по index
export const deleteDataId = (data) => {
	const authorizedUser = getUsersData('authorizedUser');
	const usersData = getUsersData();
	authorizedUser.favorite = authorizedUser.favorite.filter((id) => id !== data);
	const newUsersData = usersData.filter(
		(user) => user['email'] !== authorizedUser['email']
	);
	newUsersData.push(authorizedUser);
	setUsersData('authorizedUser', authorizedUser);
	setUsersData('usersData', newUsersData);
};
//Очистка ЛХ
export const clearLoggedUser = (userData) => {
	replaceUserData(userData);
	setUsersData('isLogged', false);
	setUsersData('authorizedUser', '');
};
