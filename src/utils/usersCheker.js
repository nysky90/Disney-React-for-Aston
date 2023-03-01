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
	const checkUser = JSON.parse(localStorage.getItem('usersData'));
	const checkValueMatch = checkUser.some(
		({ email, password }) =>
			email === userData.email && password === userData.password
	);
	if (checkValueMatch) {
		//подумать
		localStorage.setItem('isLogged', true);
		localStorage.setItem('authorizedUser', JSON.stringify(userData));
		return checkValueMatch;
	}
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
//Очистка ЛХ
export const clearLoggedUser = () => {
	localStorage.setItem('isLogged', false);
	localStorage.setItem('authorizedUser', '');
};
