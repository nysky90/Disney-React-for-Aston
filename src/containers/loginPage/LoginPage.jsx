import { useDispatch } from 'react-redux';

import { useInput } from '../../hooks/useValidateInput';
import { login } from '../../store';
import { CustomForm } from '../../components';
import { useState } from 'react';

const LoginPage = () => {
	const [error, setError] = useState(false);
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
		setError(false);
		dispatch(login(userData)) || setError(true);
	};

	return (
		<CustomForm
			email={email}
			password={password}
			handleSubmit={handleSubmit}
			title='Login'
			btnText='Enter'
			isError={error}
		/>
	);
};

export { LoginPage };
