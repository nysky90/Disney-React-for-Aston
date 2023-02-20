import PropTypes from 'prop-types';

import s from './characterList.module.scss';

const CharacterList = ({ characters }) => {
	console.log(characters);
	return (
		<ul className={s.list}>
			{characters.map(({ name, id, img }) => (
				<li key={id} className={s.list__item}>
					<a href='#'>
						<img src={img} alt={name} className={s.list__img} />
						<p className={s.list__text}>{name}</p>
					</a>
				</li>
			))}
		</ul>
	);
};

CharacterList.propTypes = {
	characters: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string,
			img: PropTypes.string,
			id: PropTypes.number,
		})
	),
};

export { CharacterList };
