import { Link } from 'react-router-dom';

import s from './historyPage.module.scss';

const HistoryPage = () => {
	const { history } = JSON.parse(localStorage.getItem('authorizedUser'));

	return (
		<div className={s.history}>
			<h1 className={s.history__title}>Character search history</h1>
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
