import { useParams } from 'react-router';
import { useEffect, useState } from 'react';

import { CharacterInfo } from '../../components';
import { CharacterLinkGoBack } from '../../components';
import { getApiResourse } from '../../utils/network';
import { DISNEY_ROOT } from '../../constants/api';

import s from './characterInfoPage.module.scss';

const CharacterInfoPage = () => {
	const [info, setInfo] = useState(null);

	const { id } = useParams();

	const setCharacterData = async (url) => {
		const result = await getApiResourse(url);
		setInfo(result);
	};

	useEffect(() => {
		setCharacterData(`${DISNEY_ROOT}/${id}`);
	}, [id]);
	return (
		<div className={s.infoPage}>
			<CharacterLinkGoBack />
			{info && <CharacterInfo info={info} />}
		</div>
	);
};

export { CharacterInfoPage };
