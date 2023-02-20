import { DISNEY_URL } from '../constants/api';

export const getCharacterPageId = (url) => {
	const result = Number(url.replace(DISNEY_URL, ''));
	return result || 1;
};
