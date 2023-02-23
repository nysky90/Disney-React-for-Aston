import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import s from '../forms.module.scss';

const LoginForm = (props) => {
	const { setEmail, setPassword, error } = props;
	return (
		<>
			<h2 className={s.form__title}>Login</h2>
			{error && <div>{error}</div>}
			<input
				className={s.form__input}
				type='email'
				name='email'
				onChange={(e) => setEmail(e.target.value)}
				placeholder='email@google.com'
				required
			/>
			<input
				className={s.form__input}
				type='password'
				name='password'
				onChange={(e) => setPassword(e.target.value)}
				placeholder='Your password'
				required
				minLength={3}
			/>
			<button type='submit' className={s.form__btn}>
				Sign In
			</button>

			<p>
				You havet account?
				<Link to={'/registration'}>
					<span className={s.form__span}>Register</span>
				</Link>
			</p>
		</>
	);
};

export { LoginForm };

LoginForm.propTypes = {
	setEmail: PropTypes.func,
	setPassword: PropTypes.func,
	error: PropTypes.string,
};

export {};
