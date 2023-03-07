import { Link } from 'react-router-dom';
import { UiButton } from '../../';

const UserBar = ({ email, logoutUser }) => {
	return (
		<>
			<Link to={'/history'}>History</Link>
			<Link to={'/favorite'}>Favorite</Link>
			{email}

			<UiButton onClick={logoutUser} text='Logout' />
		</>
	);
};

export { UserBar };
