import { useDispatch } from 'react-redux';

import { useInput } from '../../hooks/useValidateInput';
import { registration } from '../../store';
import { CustomForm } from '../../components';

const SignInPage = () => {
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
		dispatch(registration(userData));
	};

	return (
		<CustomForm
			email={email}
			password={password}
			title='Registration'
			btnText='Registrate'
			handleSubmit={handleSubmit}
		/>
	);
};

export { SignInPage };
