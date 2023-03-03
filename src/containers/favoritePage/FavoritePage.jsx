import { useSelector } from 'react-redux';
import { selectorFavorite } from '../../store';
import s from './favoritePage.module.scss';

const FavoritePage = () => {
	const storeFavotiteData = useSelector(selectorFavorite);
	console.log(storeFavotiteData);
	return <></>;
};

export { FavoritePage };
