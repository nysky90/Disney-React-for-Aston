import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

import { CharactersList } from '../../components';
import { selectorFavorite } from '../../store';
import { getApiResourse } from '../../utils/network';
import { DISNEY_ROOT } from '../../constants/api';

import s from './favoritePage.module.scss';

const FavoritePage = () => {
	const [characters, setCharacters] = useState([]);
	const storeFavotiteData = useSelector(selectorFavorite);

	useEffect(() => {
		const setCharactersData = async () => {
			const result = await Promise.all(
				storeFavotiteData.map((id) => {
					return getApiResourse(`${DISNEY_ROOT}/${id}`);
				})
			);
			setCharacters(
				result.map(({ name, _id, imageUrl }) => {
					return {
						name,
						id: _id,
						img: imageUrl,
					};
				})
			);
		};
		setCharactersData();
	}, [storeFavotiteData]);

	return (
		<>
			<h1 className={s.favorite__title}>Your favorite characters</h1>
			{(characters.length && <CharactersList characters={characters} />) || (
				<h3 className={s.favorite__error}>
					You dont add any favorite character
				</h3>
			)}
		</>
	);
};

export { FavoritePage };
