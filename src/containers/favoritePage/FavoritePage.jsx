import { useSelector } from 'react-redux';
import { lazy, Suspense } from 'react';
// import { CharacterById } from '../../components';
import { selectorFavorite } from '../../store';

import s from './favoritePage.module.scss';

const CharacterById = lazy(() =>
	import('../../components/character/characterById/CharacterById')
);

const FavoritePage = () => {
	const storeFavotiteData = useSelector(selectorFavorite);
	return (
		<>
			<h1 className={s.favorite__title}>Your favorite characters</h1>
			<ul className={s.favorite__list}>
				{storeFavotiteData.map((id) => {
					return (
						<Suspense fallback={<h3>...Loading</h3>}>
							<CharacterById key={id} id={id} />;
						</Suspense>
					);
				})}
			</ul>
		</>
	);
};

export { FavoritePage };
