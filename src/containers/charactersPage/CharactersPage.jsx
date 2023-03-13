import { useState, useEffect } from 'react';

import {
	CharacterNavigation,
	CharactersList,
	UiSpinner,
	ErrorApi,
} from '../../components';
import { useQueryParams } from '../../hooks/useQueryParams';
import { useGetCharactersQuery } from '../../utils';

const CharactersPage = () => {
	const [counterPage, setCounterPage] = useState(1);

	const query = useQueryParams();
	const queryPage = query.get('page');
	const { data, isLoading, isError } = useGetCharactersQuery(queryPage);

	useEffect(() => {
		setCounterPage(queryPage);
	}, [queryPage]);

	return (
		<>
			<h2>Character's</h2>
			<CharacterNavigation counterPage={counterPage} error={isError} />
			{isLoading && <UiSpinner />}
			{isError && <ErrorApi />}
			{data && <CharactersList characters={data} />}
			<CharacterNavigation counterPage={counterPage} error={isError} />
		</>
	);
};

export { CharactersPage };
