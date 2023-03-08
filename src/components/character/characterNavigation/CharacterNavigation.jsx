import { Link } from 'react-router-dom';

import { UiButton } from '../..';
import { useTheme } from '../../../context/ThemeContext';

import s from './characterNavigation.module.scss';

const CharacterNavigation = ({ counterPage, error }) => {
	const themeBtn = useTheme();

	return (
		<div className={s.navigation}>
			<h2>Character's</h2>
			<div>
				<Link to={`/characters?page=${counterPage - 1}`} className={s.link}>
					<UiButton
						text='Previous'
						disabled={counterPage < 2}
						theme={themeBtn.theme}
					/>
				</Link>

				<Link
					to={`/characters?page=${Number(counterPage) + 1}`}
					className={s.link}
				>
					<UiButton text='Next' disabled={error} theme={themeBtn.theme} />
				</Link>
			</div>
		</div>
	);
};

export { CharacterNavigation };
