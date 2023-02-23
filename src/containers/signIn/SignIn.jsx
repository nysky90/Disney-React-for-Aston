import { useLocation, useNavigate } from 'react-router';
import { useState } from 'react';

import { RegistrationForm, LoginForm } from '../../components';

import s from './signIn.module.scss';

const SignIn = () => {
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const [errorRegister, setErrorRegister] = useState(false);
	const [errorLogin, setErrorLogin] = useState(false);
	const location = useLocation();
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		localStorage.getItem('data') || localStorage.setItem('data', '[]');
		const userData = {
			email,
			password,
		};
		if (location.pathname === '/login') {
			handleLogin(userData);
		} else {
			handleRegistration(userData);
		}
	};
	//проверка логина и вход
	const handleLogin = (user) => {
		const checkUser = JSON.parse(localStorage.getItem('data'));
		const res = checkUser.some(
			({ email, password }) =>
				email === user.email && password === user.password
		);
		if (res) {
			navigate('/');
			localStorage.setItem('isLogged', true);
			localStorage.setItem('loggedUser', JSON.stringify(user));
		} else {
			setErrorLogin('Cant login in. Please go and create account');
		}
	};
	//регистрация и вход
	const handleRegistration = (user) => {
		const oldStorage = JSON.parse(localStorage.getItem('data'));

		if (oldStorage.some(({ email }) => email === user.email)) {
			setErrorRegister('This email alrealy exist');
		} else {
			oldStorage.push(user);
			localStorage.setItem('data', JSON.stringify(oldStorage));
			localStorage.setItem('isLogged', true);
			localStorage.setItem('loggedUser', JSON.stringify(user));
			navigate('/');
		}
	};

	return (
		<div>
			<form className={s.form} onSubmit={handleSubmit}>
				{location.pathname === '/login' ? (
					<LoginForm
						setEmail={setEmail}
						setPassword={setPassword}
						error={errorLogin}
					/>
				) : location.pathname === '/registration' ? (
					<RegistrationForm
						setEmail={setEmail}
						setPassword={setPassword}
						error={errorRegister}
					/>
				) : null}
			</form>
		</div>
	);
};

export { SignIn };
