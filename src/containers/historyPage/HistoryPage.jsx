import { Link } from 'react-router-dom';

import { selectorHistory } from '../../store/slice/user/userSlice';
import { useSelector } from 'react-redux';

import s from './historyPage.module.scss';

const HistoryPage = () => {
	const history = useSelector(selectorHistory);

	return (
		<div className={s.history}>
			<h2>Character search history</h2>
			<ul className={s.history__list}>
				{history.map((item, i) => (
					<li className={s.history__link} key={i}>
						<Link to={`/character?name=${item}`}>
							{i + 1}. request - {item}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export { HistoryPage };
