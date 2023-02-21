import { useState, useEffect, lazy, Suspense } from 'react';

import { CharacterNavigation, UiSpinner } from '../../components';
import { useQueryParams } from '../../hooks/useQueryParams';
import { getApiResourse } from '../../utils/network';
import { getCharacterPageId } from '../../services/getCharactersData';
import { DISNEY_URL } from '../../constants/api';

const CharactersList = lazy(() => import('../../components'));

const CharacterPage = () => {
	const [characters, setCharacters] = useState(null);
	const [prevCharacters, setPrevCharacters] = useState(null);
	const [nextCharacters, setNextCharacters] = useState(null);
	const [counterPage, setCounterPage] = useState(1);

	const query = useQueryParams();
	const queryPage = query.get('page');

	const getResourse = async (url) => {
		const result = await getApiResourse(url);
		if (result) {
			const characterList = result.data.map(({ name, _id, imageUrl }) => {
				return {
					name,
					id: _id,
					img: imageUrl,
				};
			});
			setCharacters(characterList);
			setNextCharacters(result.nextPage);
			setPrevCharacters(result.previousPage);
			setCounterPage(getCharacterPageId(url));
		} else {
			console.log('ERROR!!!!');
		}
	};

	useEffect(() => {
		getResourse(DISNEY_URL + queryPage);
	}, [queryPage]);

	return (
		<>
			<CharacterNavigation
				getResourse={getResourse}
				prevCharacters={prevCharacters}
				nextCharacters={nextCharacters}
				counterPage={counterPage}
			/>
			{characters && (
				<Suspense fallback={<UiSpinner />}>
					<CharactersList characters={characters} />
				</Suspense>
			)}
		</>
	);
};

export { CharacterPage };
