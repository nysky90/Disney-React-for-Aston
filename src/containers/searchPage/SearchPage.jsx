import { useState } from 'react';

import { UiButton } from '../../components';
import { DISNEY_FILTER } from '../../constants/api';
import { CharactersList, ErrorApi } from '../../components';
import { getApiResourse } from '../../utils/network';

import s from './searchPage.module.scss';

const SearchPage = () => {
	const [inputValue, setInputValue] = useState('');
	const [searchCharacters, setSearchCharacters] = useState([]);
	const [error, setError] = useState(false);

	const setCharacter = async () => {
		const result = await getApiResourse(DISNEY_FILTER + inputValue);
		if (result && result.data.length > 0 && inputValue) {
			const characterList = result.data.map(({ name, _id, imageUrl }) => {
				return {
					name,
					id: _id,
					img: imageUrl,
				};
			});
			setSearchCharacters(characterList);
			setError(false);
		} else {
			setError(true);
			setSearchCharacters([]);
		}
	};

	const clearInput = () => {
		setError(false);
		setInputValue('');
		setSearchCharacters([]);
	};

	return (
		<div className={s.search}>
			<h1 className={s.search__title}>Search</h1>
			<input
				type='text'
				className={s.search__input}
				placeholder='Input name of character'
				value={inputValue}
				onChange={(e) => {
					setInputValue(e.target.value);
				}}
				autoFocus
			/>
			<div>
				<UiButton text='Find' onClick={setCharacter} />
				<UiButton text='Clear' onClick={clearInput} />
			</div>
			{searchCharacters && <CharactersList characters={searchCharacters} />}
			{error && <ErrorApi />}
		</div>
	);
};

export { SearchPage };
