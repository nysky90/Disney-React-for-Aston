import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { CharactersList } from '../../components';
import { saveHistory } from '../../store';
import { UiButton } from '../../components';
import { useTheme } from '../../context/ThemeContext';
import { useQueryParams } from '../../hooks/useQueryParams';
import { useCheckIsLogged } from '../../hooks/useCheckIsLogged';
import { useSearchCharacterQuery } from '../../utils';

import s from './searchPage.module.scss';

const SearchPage = () => {
	const [inputValue, setInputValue] = useState('');
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const themeBtn = useTheme();
	const isLogged = useCheckIsLogged();
	const query = useQueryParams();
	const queryName = query.get('name');
	let { data } = useSearchCharacterQuery(queryName);

	const handleHistory = () => {
		if (isLogged) {
			dispatch(saveHistory(inputValue));
		}
		if (inputValue) {
			navigate(`/character?name=${inputValue}`);
		}
	};

	const handleKeyPress = (e) => {
		if (e.key === 'Enter') {
			handleHistory();
		}
	};

	const clearInput = () => {
		setInputValue('');
		navigate(`/character`);
	};

	return (
		<div className={s.search}>
			<h2>Search</h2>
			<input
				type='text'
				className={s.search__input}
				placeholder='Input name of character'
				value={inputValue}
				onChange={(e) => {
					setInputValue(e.target.value);
				}}
				onKeyDown={handleKeyPress}
				autoFocus
			/>
			<div>
				<UiButton text='Find' onClick={handleHistory} theme={themeBtn.theme} />
				<UiButton text='Clear' onClick={clearInput} theme={themeBtn.theme} />
			</div>
			{data && <CharactersList characters={data} />}
		</div>
	);
};

export { SearchPage };
