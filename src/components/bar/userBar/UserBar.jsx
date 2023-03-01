import { Link } from 'react-router-dom';

const UserBar = ({ email, logoutUser }) => {
	return (
		<>
			<Link to={'/personPage'}>{email}</Link>
			<button onClick={logoutUser}>Logout</button>
		</>
	);
};

export { UserBar };
