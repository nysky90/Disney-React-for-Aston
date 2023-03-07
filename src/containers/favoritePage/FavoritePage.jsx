import { useSelector } from 'react-redux';
import { lazy, Suspense } from 'react';

import { UiSpinner } from '../../components';
import { selectorFavorite } from '../../store';

import s from './favoritePage.module.scss';

const CharacterById = lazy(() =>
	import('../../components/character/characterById/CharacterById')
);

const FavoritePage = () => {
	const storeFavotiteData = useSelector(selectorFavorite);
	return (
		<>
			<h2>Your favorite characters</h2>
			<ul className={s.favorite__list}>
				{storeFavotiteData.map((id) => {
					return (
						<Suspense key={id} fallback={<UiSpinner />}>
							<CharacterById key={id} id={id} />
						</Suspense>
					);
				})}
			</ul>
		</>
	);
};

export { FavoritePage };
