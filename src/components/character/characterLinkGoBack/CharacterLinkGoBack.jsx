import { useNavigate } from 'react-router-dom';

import s from './characterLinkGoBack.module.scss';

const CharacterLinkGoBack = () => {
	const history = useNavigate();
	const handleGoBack = (e) => {
		e.preventDefault();
		history(-1);
	};

	return (
		<button className={s.btn_goBack} onClick={handleGoBack}>
			Go back
		</button>
	);
};

export { CharacterLinkGoBack };
