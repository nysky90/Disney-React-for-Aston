import { useGetCharacterByIdQuery } from '../../../utils';
import { ChatacterCard } from '../chatacterCard/ChatacterCard';

const CharacterById = ({ id }) => {
	const { data } = useGetCharacterByIdQuery(id);
	return <ChatacterCard data={data ? data : {}} />;
};

export default CharacterById;
