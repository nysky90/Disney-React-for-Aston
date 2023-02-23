import { Link } from 'react-router-dom';
import s from './userBar.module.scss';

const UserBar = ({ email, logoutUser }) => {
	return (
		<>
			<p>{email}</p>
			<Link to={'/'} onClick={logoutUser}>
				Logout
			</Link>
		</>
	);
};

export { UserBar };
