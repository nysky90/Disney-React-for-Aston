import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { CharactersList } from '../../components';
import { saveHistory } from '../../store';
import { UiButton } from '../../components';
import { useQueryParams } from '../../hooks/useQueryParams';
import { useCheckIsLogged } from '../../hooks/useCheckIsLogged';
import { useSearchCharacterQuery } from '../../utils';

import s from './searchPage.module.scss';

const SearchPage = () => {
	const [inputValue, setInputValue] = useState('');
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const isLogged = useCheckIsLogged();
	const query = useQueryParams();
	const queryName = query.get('name');
	let { data } = useSearchCharacterQuery(queryName);

	const handleHistory = () => {
		if (isLogged) {
			dispatch(saveHistory(inputValue));
		}
		navigate(`/character?name=${inputValue}`);
	};

	const clearInput = () => {
		setInputValue('');
		navigate(`/character`);
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
				<UiButton text='Find' onClick={handleHistory} />
				<UiButton text='Clear' onClick={clearInput} />
			</div>
			{data && <CharactersList characters={data} />}
		</div>
	);
};

export { SearchPage };
