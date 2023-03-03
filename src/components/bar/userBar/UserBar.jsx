import { Link } from 'react-router-dom';

const UserBar = ({ email, logoutUser }) => {
	return (
		<>
			<Link to={'/history'}>History</Link>
			<Link to={'/favorite'}>Favorite</Link>
			{email}
			<button onClick={logoutUser}>Logout</button>
		</>
	);
};

export { UserBar };
