import { Link } from 'react-router-dom';

import s from './chatacterCard.module.scss';

const ChatacterCard = ({ data }) => {
	const { name, _id, imageUrl } = data;

	return (
		<li key={_id} className={s.list__item}>
			<Link to={`/characters/${_id}`}>
				<img src={imageUrl} alt={name} className={s.list__img} />
				<p className={s.list__text}>{name}</p>
			</Link>
		</li>
	);
};

export { ChatacterCard };
