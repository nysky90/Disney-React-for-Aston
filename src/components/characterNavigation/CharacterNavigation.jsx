import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { UiButton } from '../../components';

import s from './characterNavigation.module.scss';

const CharacterNavigation = ({
	getResourse,
	prevCharacters,
	nextCharacters,
	counterPage,
}) => {
	const hancleChangeNext = () => getResourse(nextCharacters);
	const hancleChangePrev = () => getResourse(prevCharacters);

	return (
		<div className={s.navigation}>
			<h1 className={s.title}>Character's</h1>

			<div>
				<Link to={`/characters?page=${counterPage - 1}`} className={s.link}>
					<UiButton
						text='Previous'
						onClick={hancleChangePrev}
						disabled={!prevCharacters}
					/>
				</Link>

				<Link to={`/characters?page=${counterPage + 1}`} className={s.link}>
					<UiButton
						text='Next'
						onClick={hancleChangeNext}
						disabled={!nextCharacters}
					/>
				</Link>
			</div>
		</div>
	);
};

CharacterNavigation.propTypes = {
	getResourse: PropTypes.func,
	prevCharacters: PropTypes.string,
	nextCharacters: PropTypes.string,
	counterPage: PropTypes.number,
};

export { CharacterNavigation };
