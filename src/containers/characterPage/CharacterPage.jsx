import { useState, useEffect } from 'react';

import { CharacterNavigation, CharactersList } from '../../components';
import { useQueryParams } from '../../hooks/useQueryParams';
import { useGetCharactersQuery } from '../../utils';

const CharacterPage = () => {
	const [counterPage, setCounterPage] = useState(1);

	const query = useQueryParams();
	const queryPage = query.get('page');
	const { data, isLoading, isError } = useGetCharactersQuery(queryPage);

	useEffect(() => {
		setCounterPage(queryPage);
	}, [queryPage]);

	return (
		<>
			<CharacterNavigation counterPage={counterPage} error={isError} />
			{isLoading && <h1>Loading...</h1>}
			{isError && <h1>Error</h1>}
			{data && <CharactersList characters={data.data} />}
		</>
	);
};

export { CharacterPage };
