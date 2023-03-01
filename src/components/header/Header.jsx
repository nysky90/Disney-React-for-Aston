import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import { TopBar } from '../bar/topBar/TopBar';
import { useCheckIsLogged } from '../../hooks/useUser';
import logo from './img/logo.png';

import s from './header.module.scss';

const Header = () => {
	const isLogged = useCheckIsLogged();

	return (
		<div className={s.header}>
			<div className={s.container}>
				<NavLink to='/'>
					<img src={logo} alt='logo' className={s.logo} />
				</NavLink>
				<div className={s.header__auth}>
					<NavLink to='/characters?page=1'>
						<p>All character`s</p>
					</NavLink>
					<NavLink to='/search'>
						<p>Search character</p>
					</NavLink>
					{!isLogged && (
						<>
							<NavLink to='/login'>
								<p>Login</p>
							</NavLink>
							<NavLink to='/registration'>
								<p>Registration</p>
							</NavLink>
						</>
					)}
					<TopBar />
				</div>
			</div>
		</div>
	);
};

Header.propTypes = {
	test: PropTypes.string,
};

export { Header };
