import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import logo from './img/logo.png';

import s from './header.module.scss';

const Header = () => {
    return (
        <div className={s.header}>
            <div className={s.container}>
                <NavLink to='/'>
                    <img src={logo} alt="logo" className={s.logo} />
                </NavLink>
                
                <div className={s.header__auth}>
                    <NavLink to='/characters?page=1'>
                        <p>All characters</p>
                    </NavLink>
                    <p>Log In</p>
                    <p>Registration</p>
                </div>
            </div>
        </div>
    )
}

Header.propTypes = {
    test: PropTypes.string
}

export {Header};
