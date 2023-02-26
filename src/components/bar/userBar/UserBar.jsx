import { Link } from 'react-router-dom';

const UserBar = ({ email, logoutUser }) => {
	return (
		<>
			<p>{email}</p>
			<Link onClick={logoutUser}>Logout</Link>
		</>
	);
};

export { UserBar };
