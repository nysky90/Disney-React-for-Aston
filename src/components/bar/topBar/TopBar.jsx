import { useNavigate } from 'react-router-dom';
import { UserBar } from '../userBar/UserBar';
import { useDispatch } from 'react-redux';
import { logout } from '../../../store/slice/user/userSlice';
import {
	useEmailIsLogged,
	useCheckIsLogged,
} from '../../../hooks/useCheckIsLogged';
import { useEffect } from 'react';

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
	}, [inLogged]);

	return inLogged && <UserBar email={loginName} logoutUser={logoutUser} />;
};

export { TopBar };
