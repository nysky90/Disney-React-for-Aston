import { useSelector } from 'react-redux';
import { lazy, Suspense } from 'react';

import { UiSpinner } from '../../components';
import { selectorFavorite } from '../../store';

import s from './favoritePage.module.scss';
/**Добавил lazy. Не попало в этот ПР, потому что затупил и смержил с main веткой.  С путем надо колдовать, так как
 * lazy+Suspense поддерживают только дефолтный экспорт.
 **/
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
