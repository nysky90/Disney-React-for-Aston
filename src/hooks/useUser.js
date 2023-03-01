import { useSelector } from 'react-redux';

export const useCheckIsLogged = () => {
	const { isLogged } = useSelector((state) => state.user);
	return isLogged;
};

export const useEmailIsLogged = () => {
	const { email } = useSelector((state) => state.user.user);
	return email;
};
