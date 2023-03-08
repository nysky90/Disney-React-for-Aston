import { useGetCharacterByIdQuery } from '../../../utils';
import { ChatacterCard } from '../../';

const CharacterById = ({ id }) => {
	const { data } = useGetCharacterByIdQuery(id);
	return <ChatacterCard data={data ? data : {}} />;
};

export default CharacterById;
