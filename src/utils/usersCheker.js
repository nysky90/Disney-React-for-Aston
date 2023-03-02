export const getLoggedUser = () => {
	JSON.parse(localStorage.getItem('usersData')) ||
		localStorage.setItem('usersData', '[]');
	const loggedUser = JSON.parse(localStorage.getItem('isLogged'))
		? JSON.parse(localStorage.getItem('authorizedUser'))
		: '';
	return loggedUser;
};

//проверка email и пароля на совпадение
export const checkUserLogin = (userData) => {
	const checkUsers = JSON.parse(localStorage.getItem('usersData'));
	const checkValueMatch = checkUsers.some(
		({ email, password }) =>
			email === userData.email && password === userData.password
	);
	if (checkValueMatch) {
		setLoggedUser(checkUsers, userData);
		return checkValueMatch;
	}
};

const setLoggedUser = (users, user) => {
	const loggedUser = users.filter(({ email }) => email === user.email);
	localStorage.setItem('isLogged', true);
	localStorage.setItem('authorizedUser', JSON.stringify(...loggedUser));
};

//регистрация пользователя с проверкой на наличие одинаковых email
export const registerUser = (userData) => {
	const checkUser = JSON.parse(localStorage.getItem('usersData'));
	const checkEmail = checkUser.some(({ email }) => email === userData.email);
	if (!checkEmail) {
		const oldLocalStorage = JSON.parse(localStorage.getItem('usersData'));
		oldLocalStorage.push(userData);
		localStorage.setItem('usersData', JSON.stringify(oldLocalStorage));
	}
};

const replaceUserData = () => {
	const user = JSON.parse(localStorage.getItem('authorizedUser'));
	const userData = JSON.parse(localStorage.getItem('usersData'));
	const newUserData = userData.filter((item) => item.email !== user.email);
	newUserData.push(user);
	localStorage.setItem('usersData', JSON.stringify(newUserData));
};
//Очистка ЛХ
export const clearLoggedUser = () => {
	replaceUserData();
	localStorage.setItem('isLogged', false);
	localStorage.setItem('authorizedUser', '');
};
