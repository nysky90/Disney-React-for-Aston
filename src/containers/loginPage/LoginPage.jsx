import { useDispatch } from 'react-redux';

import { useInput } from '../../hooks/useValidateInput';
import { login } from '../../store';
import { CustomForm } from '../../components';

const LoginPage = () => {
	const email = useInput('', {
		isEmpty: true,
		minLength: 3,
		emailError: false,
		isEmail: true,
	});
	const password = useInput('', {
		isEmpty: true,
		minLength: 3,
	});
	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();

		const userData = {
			email: email.value,
			password: password.value,
			favorite: [],
			history: [],
		};
		dispatch(login(userData));
	};

	return (
		<CustomForm
			email={email}
			password={password}
			handleSubmit={handleSubmit}
			title='Login'
			btnText='Enter'
		/>
	);
};

export { LoginPage };
