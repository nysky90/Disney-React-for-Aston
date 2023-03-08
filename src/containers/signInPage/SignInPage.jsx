import { useDispatch } from 'react-redux';
import { useState } from 'react';

import { useInput } from '../../hooks/useValidateInput';
import { registration } from '../../store';
import { CustomForm } from '../../components';

const SignInPage = () => {
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
		dispatch(registration(userData)) || setError(true);
	};

	return (
		<CustomForm
			email={email}
			password={password}
			title='Registration'
			btnText='Registrate'
			handleSubmit={handleSubmit}
			isError={error}
		/>
	);
};

export { SignInPage };
