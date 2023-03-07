import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';

import {
	saveFavorite,
	deleteFavorite,
	selectorFavorite,
	selectorIsLogged,
} from '../../../store';
import iconFavoriteActive from './img/favorite.svg';
import iconFavorite from './img/favoriteGrey.svg';

import s from './characterImage.module.scss';

const CharacterImage = ({ imageUrl, name }) => {
	const favoriteChar = useSelector(selectorFavorite);
	const isLogged = useSelector(selectorIsLogged);
	const dispatch = useDispatch();
	const { id } = useParams();

	const checkFavorite = favoriteChar.some((char) => char === id);
	const dispatchFavoriteChar = () => {
		if (checkFavorite) {
			dispatch(deleteFavorite(id));
		} else {
			dispatch(saveFavorite(id));
		}
	};

	return (
		<div className={s.charInfo__img}>
			<img src={imageUrl} alt={name} />
			{isLogged && (
				<button className={s.charInfo__btn} onClick={dispatchFavoriteChar}>
					{checkFavorite ? (
						<img src={iconFavoriteActive} alt='favoriteActive' />
					) : (
						<img src={iconFavorite} alt='favorite' />
					)}
				</button>
			)}
		</div>
	);
};

export { CharacterImage };
