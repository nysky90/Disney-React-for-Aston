import PropTypes from 'prop-types';

import { ListOfElements } from '../../components';

import s from './characterInfo.module.scss';

const CharacterInfo = ({ info }) => {
	const { name, imageUrl, films, shortFilms, tvShows, videoGames } = info;
	return (
		<div className={s.charInfo}>
			<div className={s.charInfo__img}>
				<img src={imageUrl} alt={name} />
			</div>
			<div className={s.charInfo__base}>
				<h2 className={s.charInfo__title}>{name}</h2>
				<div className={s.charInfo__wrapper}>
					<ListOfElements list={films} title='Films' />
					<ListOfElements list={shortFilms} title='Short films' />
					<ListOfElements list={tvShows} title='TV shows' />
					<ListOfElements list={videoGames} title='Video games' />
				</div>
			</div>
		</div>
	);
};

CharacterInfo.propTypes = {
	test: PropTypes.string,
};

export { CharacterInfo };
