import PropTypes from 'prop-types';
import logo from './img/logo.png';

import s from './header.module.scss';

const Header = () => {
    return (
        <div className={s.header}>
            <div className={s.container}>
                <img src={logo} alt="logo" className={s.logo} />
                <div className={s.header__auth}>
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

export default Header;
