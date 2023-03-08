import PropTypes from 'prop-types';

import { UiButton } from '../../';

import s from '../forms.module.scss';

//Prettier исправляет конструкцию (a&&b) && c убирая скобки, поэтмоу делаю через ?

const CustomForm = (props) => {
	const { email, password, handleSubmit, title, btnText, isError } = props;

	return (
		<form className={s.form}>
			<h2 className={s.form__title}>{title}</h2>
			{email.isEmpty && email.isDirty && <h3>Email is not correct</h3>}
			{email.emailError && email.isDirty && <h3>Email must have @ and .reg</h3>}
			{isError && <h3>Something went wrong, try another email</h3>}
			<input
				className={s.form__input}
				onChange={(e) => email.onChange(e)}
				onBlur={(e) => email.onBlur(e)}
				type='email'
				name='email'
				placeholder='write your email'
				required
			/>
			{password.isEmpty && password.isDirty && (
				<h3>Password must be longer 3</h3>
			)}
			<input
				className={s.form__input}
				type='password'
				onChange={(e) => password.onChange(e)}
				onBlur={(e) => password.onBlur(e)}
				placeholder='Your password'
				name='password'
				minLength={3}
			/>
			<UiButton
				type='submit'
				disabled={!email.formValidation || !password.formValidation}
				onClick={handleSubmit}
				text={btnText}
				size='big'
			/>
		</form>
	);
};

CustomForm.propTypes = {
	email: PropTypes.shape({
		isEmpty: PropTypes.bool,
		isDirty: PropTypes.bool,
		formValidation: PropTypes.bool,
		emailError: PropTypes.bool,
		onChange: PropTypes.func,
		onBlur: PropTypes.func,
	}),
	password: PropTypes.shape({
		isEmpty: PropTypes.bool,
		isDirty: PropTypes.bool,
		formValidation: PropTypes.bool,
		onChange: PropTypes.func,
		onBlur: PropTypes.func,
	}),
	handleSubmit: PropTypes.func,
	title: PropTypes.string,
	btn_text: PropTypes.string,
};

export { CustomForm };
