import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { UserBar } from '../../';
import { logout } from '../../../store';
import {
	useEmailIsLogged,
	useCheckIsLogged,
} from '../../../hooks/useCheckIsLogged';

const TopBar = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const inLogged = useCheckIsLogged();
	const loginName = useEmailIsLogged();

	const logoutUser = () => {
		dispatch(logout());
		navigate('/');
	};
	useEffect(() => {
		if (inLogged) {
			navigate('/');
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [inLogged]);

	return inLogged && <UserBar email={loginName} logoutUser={logoutUser} />;
};

export { TopBar };
