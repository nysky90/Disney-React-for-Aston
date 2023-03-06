import { useParams } from 'react-router';

import { CharacterInfo } from '../../components';
import { CharacterLinkGoBack } from '../../components';
import { useGetCharacterByIdQuery } from '../../utils';

import s from './characterInfoPage.module.scss';

const CharacterInfoPage = () => {
	const { id } = useParams();

	const { data } = useGetCharacterByIdQuery(id);

	return (
		<div className={s.infoPage}>
			<CharacterLinkGoBack />
			{data && <CharacterInfo info={data} />}
		</div>
	);
};

export { CharacterInfoPage };
