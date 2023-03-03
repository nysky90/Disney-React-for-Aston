import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { saveFavorite } from '../../../store';
import { useParams } from 'react-router';
import s from './characterImage.module.scss';

const CharacterImage = ({ imageUrl, name }) => {
	const dispatch = useDispatch();

	const { id } = useParams();

	const setFavorite = () => {
		console.log('i wanna save ' + id);
		dispatch(saveFavorite(id));
	};

	return (
		<>
			<div className={s.charInfo__img}>
				<img src={imageUrl} alt={name} />
			</div>
			<button onClick={setFavorite}>set</button>
			<button>delete</button>
		</>
	);
};

CharacterImage.propTypes = {
	test: PropTypes.string,
};

export { CharacterImage };
