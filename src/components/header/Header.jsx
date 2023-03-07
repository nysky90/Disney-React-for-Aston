import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import { TopBar } from '../';
import { ChooseTheme } from '../';
import { useCheckIsLogged } from '../../hooks/useCheckIsLogged';
import logo from './img/logo.png';

import s from './header.module.scss';

const Header = () => {
	const isLogged = useCheckIsLogged();

	return (
		<div className={s.header}>
			<div className={s.container}>
				<div className={s.header__discr}>
					<NavLink to='/'>
						<img src={logo} alt='logo' className={s.logo} />
					</NavLink>
					<ChooseTheme />
				</div>
				<div className={s.header__auth}>
					<NavLink to='/characters?page=1'>All character`s</NavLink>
					<NavLink to='/character'>Find character</NavLink>
					{!isLogged && (
						<>
							<NavLink to='/login'>Login</NavLink>
							<NavLink to='/registration'>Registration</NavLink>
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
