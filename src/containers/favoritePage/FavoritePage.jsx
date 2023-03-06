import { useSelector } from 'react-redux';

import { CharactersList } from '../../components';
import { selectorFavorite } from '../../store';
import { useGetCharacterByIdQuery } from '../../utils';

import s from './favoritePage.module.scss';

const FavoritePage = () => {
	const storeFavotiteData = useSelector(selectorFavorite);

	const GetDataCharacters = function (id) {
		const { data } = useGetCharacterByIdQuery(id);
		return data ? data : {};
	};
	const results = storeFavotiteData.map((id) => {
		return GetDataCharacters(id);
	});

	return (
		<>
			<h1 className={s.favorite__title}>Your favorite characters</h1>
			{(results && <CharactersList characters={results} />) || (
				<h3 className={s.favorite__error}>
					You dont add any favorite character
				</h3>
			)}
		</>
	);
};

export { FavoritePage };
