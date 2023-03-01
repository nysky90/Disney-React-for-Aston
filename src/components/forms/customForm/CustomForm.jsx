import PropTypes from 'prop-types';

import s from '../forms.module.scss';

//Prettier исправляет конструкцию (a&&b) && c убирая скобки, поэтмоу делаю через ?

const CustomForm = (props) => {
	const { email, password, handleSubmit, title, btn_text } = props;

	return (
		<div>
			<form className={s.form}>
				<h2 className={s.form__title}>{title}</h2>
				{email.isEmpty && email.isDirty ? (
					<div>Email is not correct</div>
				) : (
					<p></p>
				)}
				{email.emailError && email.isDirty ? (
					<div>Email must have @ and .reg</div>
				) : (
					<p></p>
				)}
				<input
					className={s.form__input}
					onChange={(e) => email.onChange(e)}
					onBlur={(e) => email.onBlur(e)}
					type='email'
					name='email'
					placeholder='write your email'
					required
				/>
				{password.isEmpty && password.isDirty ? (
					<div>Password must be longer 3</div>
				) : (
					<p></p>
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
				<button
					type='submit'
					disabled={!email.formValidation || !password.formValidation}
					className={s.form__btn}
					onClick={handleSubmit}
				>
					{btn_text}
				</button>
			</form>
		</div>
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
