import { useState } from 'react';

import { UiButton } from '../../components';
import { DISNEY_FILTER } from '../../constants/api';
import { CharactersList, ErrorApi } from '../../components';
import { getApiResourse } from '../../utils/network';

import s from './searchPage.module.scss';

const SearchPage = () => {
	const [inputValue, setInputValue] = useState();
	const [character, setCharacter] = useState([]);
	const [error, setError] = useState(false);

	const getCharacter = async () => {
		const result = await getApiResourse(DISNEY_FILTER + inputValue);
		if (result && result.data.length > 0 && inputValue) {
			const characterList = result.data.map(({ name, _id, imageUrl }) => {
				return {
					name,
					id: _id,
					img: imageUrl,
				};
			});
			setCharacter(characterList);
			setError(false);
		} else {
			setError(true);
		}
	};

	const handleSearch = (e) => {
		setInputValue(e.target.value);
	};

	const findCharacter = () => getCharacter();

	const clearInput = () => {
		setError(false);
		setInputValue('');
		setCharacter([]);
	};

	return (
		<div className={s.search}>
			<h1 className={s.search__title}>Search</h1>
			<input
				type='text'
				className={s.search__input}
				placeholder='Input name of character'
				value={inputValue}
				onChange={handleSearch}
				autoFocus
			/>
			<div>
				<UiButton text='Find' onClick={findCharacter} />
				<UiButton text='Clear' onClick={clearInput} />
			</div>
			{character && <CharactersList characters={character} />}
			{error && <ErrorApi />}
		</div>
	);
};

export { SearchPage };
