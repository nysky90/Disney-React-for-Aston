import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import s from '../forms.module.scss';

const RegistrationForm = (props) => {
	const { setEmail, setPassword, error } = props;
	return (
		<>
			<h2 className={s.form__title}>Registration</h2>
			{error && <div>{error}</div>}
			<input
				className={s.form__input}
				onChange={(e) => setEmail(e.target.value)}
				type='email'
				name='email'
				placeholder='write your email'
				required
			/>
			<input
				className={s.form__input}
				type='password'
				onChange={(e) => setPassword(e.target.value)}
				placeholder='Your password'
				name='password'
				required
				minLength={3}
			/>
			<button type='submit' className={s.form__btn}>
				Sign In
			</button>

			<p>
				You have account?
				<Link to={'/login'}>
					<span className={s.form__span}>Login</span>
				</Link>
			</p>
		</>
	);
};

RegistrationForm.propTypes = {
	setEmail: PropTypes.func,
	setPassword: PropTypes.func,
	error: PropTypes.string,
};

export { RegistrationForm };
