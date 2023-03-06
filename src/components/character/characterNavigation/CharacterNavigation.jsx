import { Link } from 'react-router-dom';

import { UiButton } from '../..';

import s from './characterNavigation.module.scss';

const CharacterNavigation = ({ counterPage, error }) => {
	return (
		<div className={s.navigation}>
			<h1 className={s.title}>Character's</h1>

			<div>
				<Link to={`/characters?page=${counterPage - 1}`} className={s.link}>
					<UiButton text='Previous' disabled={counterPage < 2} />
				</Link>

				<Link
					to={`/characters?page=${Number(counterPage) + 1}`}
					className={s.link}
				>
					<UiButton text='Next' disabled={error} />
				</Link>
			</div>
		</div>
	);
};

export { CharacterNavigation };
