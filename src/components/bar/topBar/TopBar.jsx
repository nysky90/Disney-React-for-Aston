import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { UserBar } from '../userBar/UserBar';

/*
	Требуется работа с состоянием из Redux. На данном этапе при авторизации высвечивается email только
	после перезагрузки страницы. Состояние в ЛХ меняется, но не реагирует в этом компоненте.
	Можно пробрость на самый верх и от туда уже менять, но знаю что проще и правильней будет использую redux.
*/
const TopBar = () => {
	const [logged, setLogged] = useState(() => {
		return localStorage.getItem('isLogged');
	});
	const [email, setEmail] = useState();
	const navigate = useNavigate();

	const checkLogged = () => {
		if (logged === 'true') {
			const emailUser = JSON.parse(localStorage.getItem('loggedUser'));
			setEmail(emailUser.email);
		}
	};
	if (localStorage.getItem('isLogged') === true) {
		checkLogged();
	}

	const logoutUser = () => {
		localStorage.setItem('isLogged', false);
		localStorage.setItem('loggedUser', '');
		setLogged(false);
		navigate('/');
	};
	useEffect(() => {
		checkLogged();
	}, [logged]);
	return (
		<>
			{logged ? (
				<UserBar email={email} logoutUser={logoutUser} />
			) : (
				<NavLink to='/login'>
					<p>Login/Registration</p>
				</NavLink>
			)}
		</>
	);
};

TopBar.propTypes = {
	test: PropTypes.string,
};

export { TopBar };
