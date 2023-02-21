import { useParams } from 'react-router';
import { useEffect, useState } from 'react';

import { CharacterInfo } from '../../components';
import { CharacterLinkGoBack } from '../../components';
import { getApiResourse } from '../../utils/network';
import { DISNEY_ROOT } from '../../constants/api';

import s from './characterInfoPage.module.scss';

const CharacterInfoPage = () => {
	const [charInfo, setCharInfo] = useState(null);

	const { id } = useParams();

	const getCharacterData = async (url) => {
		const result = await getApiResourse(url);
		setCharInfo(result);
	};

	useEffect(() => {
		getCharacterData(`${DISNEY_ROOT}/${id}`);
	}, [id]);
	return (
		<div className={s.infoPage}>
			<CharacterLinkGoBack />
			{charInfo && <CharacterInfo charInfo={charInfo} />}
		</div>
	);
};

export { CharacterInfoPage };
