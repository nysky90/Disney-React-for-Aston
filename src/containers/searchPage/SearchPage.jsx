import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { CharactersList } from '../../components';
import { saveHistory } from '../../store';
import { UiButton } from '../../components';
import { useQueryParams } from '../../hooks/useQueryParams';
import { useSearchCharacterQuery } from '../../utils';

import s from './searchPage.module.scss';

const SearchPage = () => {
	const [inputValue, setInputValue] = useState('');
	const dispatch = useDispatch();

	const query = useQueryParams();
	const queryName = query.get('name');
	let { data } = useSearchCharacterQuery(queryName);

	const handleHistory = () => {
		dispatch(saveHistory(inputValue));
	};

	const clearInput = () => {
		setInputValue('');
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
					<UiButton text='Find' onClick={handleHistory} />
				</Link>
				<Link to={`/character`}>
					<UiButton text='Clear' onClick={clearInput} />
				</Link>
			</div>
			{data && <CharactersList characters={data.data} />}
		</div>
	);
};

export { SearchPage };
