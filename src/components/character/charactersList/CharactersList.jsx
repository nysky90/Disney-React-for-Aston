import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import s from './charactersList.module.scss';

const CharactersList = ({ characters }) => {
	return (
		<ul className={s.list}>
			{characters.map(({ name, _id, imageUrl }) => (
				<li key={_id} className={s.list__item}>
					<Link to={`/characters/${_id}`}>
						<img src={imageUrl} alt={name} className={s.list__img} />
						<p className={s.list__text}>{name}</p>
					</Link>
				</li>
			))}
		</ul>
	);
};

CharactersList.propTypes = {
	characters: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string,
			imageUrl: PropTypes.string,
			_id: PropTypes.number,
		})
	),
};

export { CharactersList };
