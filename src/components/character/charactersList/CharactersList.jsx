import PropTypes from 'prop-types';
import { memo } from 'react';
import { Link } from 'react-router-dom';

import s from './charactersList.module.scss';

let CharactersList = memo(({ characters }) => {
	return (
		<ul className={s.list}>
			{characters.map(({ name, id, imageUrl }) => (
				<li key={id} className={s.list__item}>
					<Link to={`/characters/${id}`}>
						<img src={imageUrl} alt={name} className={s.list__img} />
						<p className={s.list__text}>{name}</p>
					</Link>
				</li>
			))}
		</ul>
	);
});

CharactersList.propTypes = {
	characters: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string,
			imageUrl: PropTypes.string,
			id: PropTypes.number,
		})
	),
};

export { CharactersList };
