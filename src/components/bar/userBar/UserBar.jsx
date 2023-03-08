import { Link } from 'react-router-dom';

import { UiButton } from '../../';
import { useTheme } from '../../../context/ThemeContext';

const UserBar = ({ email, logoutUser }) => {
	const themeBtn = useTheme();
	return (
		<>
			<Link to={'/history'}>History</Link>
			<Link to={'/favorite'}>Favorite</Link>
			{email}

			<UiButton onClick={logoutUser} text='Logout' theme={themeBtn.theme} />
		</>
	);
};

export { UserBar };
