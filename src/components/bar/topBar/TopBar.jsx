import { useNavigate } from 'react-router-dom';
import { UserBar } from '../userBar/UserBar';
import { useDispatch } from 'react-redux';
import { logout } from '../../../store/slice/user/userSlice';
import { useEmailIsLogged, useCheckIsLogged } from '../../../hooks/useUser';

/*
	Требуется работа с состоянием из Redux. На данном этапе при авторизации высвечивается email только
	после перезагрузки страницы. Состояние в ЛХ меняется, но не реагирует в этом компоненте.
	Можно пробрость на самый верх и от туда уже менять, но знаю что проще и правильней будет использую redux.
*/
const TopBar = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const inLogged = useCheckIsLogged();
	const loginName = useEmailIsLogged();

	const logoutUser = () => {
		dispatch(logout());
		navigate('/');
	};

	return inLogged && <UserBar email={loginName} logoutUser={logoutUser} />;
};

export { TopBar };
