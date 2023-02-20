import { useState, useEffect } from 'react';
import { CharacterList, CharacterNavigation } from '../../components';
import { useQueryParams } from '../../hooks/useQueryParams';
import { getApiResourse } from '../../utils/network';
import { getCharacterPageId } from '../../services/getCharactersData';
import { DISNEY_URL } from '../../constants/api';

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
			{characters && <CharacterList characters={characters} />}
		</>
	);
};

export { CharacterPage };
