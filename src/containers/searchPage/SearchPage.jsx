import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { UiButton } from '../../components';
import { DISNEY_FILTER } from '../../constants/api';
import { CharactersList, ErrorApi } from '../../components';
import { useQueryParams } from '../../hooks/useQueryParams';
import { getApiResourse } from '../../utils/network';

import s from './searchPage.module.scss';

const SearchPage = () => {
	const [inputValue, setInputValue] = useState('');
	const [searchCharacters, setSearchCharacters] = useState([]);
	const [error, setError] = useState(false);

	const query = useQueryParams();
	const queryName = query.get('name');

	useEffect(() => {
		const setCharacter = async () => {
			const result = await getApiResourse(DISNEY_FILTER + queryName);
			if (result && result.data.length > 0) {
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
		queryName && setCharacter(DISNEY_FILTER + queryName);
	}, [queryName]);

	const saveHistory = () => {
		const user = JSON.parse(localStorage.getItem('authorizedUser'));
		user.history.push(inputValue);
		localStorage.setItem('authorizedUser', JSON.stringify(user));
	};

	//переписать на useReduce
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
				<Link to={`/character?name=${inputValue}`}>
					<UiButton text='Find' onClick={saveHistory} />
				</Link>
				<UiButton text='Clear' onClick={clearInput} />
			</div>
			{searchCharacters && <CharactersList characters={searchCharacters} />}
			{error && <ErrorApi />}
		</div>
	);
};

export { SearchPage };
