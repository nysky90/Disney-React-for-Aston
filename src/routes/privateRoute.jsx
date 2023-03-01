import { Navigate, Outlet } from 'react-router';
import { useCheckIsLogged } from '../hooks/useUser';

export const PrivateRoute = () => {
	const inLogged = useCheckIsLogged();
	return inLogged ? <Outlet /> : <Navigate to='/login' />;
};
