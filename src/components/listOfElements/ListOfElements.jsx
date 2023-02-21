import PropTypes from 'prop-types';

import s from './listOfElements.module.scss';

const ListOfElements = ({ list, title }) => {
	return (
		<div className={s.list}>
			<h3 className={s.list__title}>{title}</h3>
			{list.length !== 0 ? (
				<ul>
					{list.map((item, i) => (
						<li key={i} className={s.list__item}>
							{item}
						</li>
					))}
				</ul>
			) : (
				<p className={s.list__item_err}>This character havent any {title}</p>
			)}
		</div>
	);
};

ListOfElements.propTypes = {
	list: PropTypes.arrayOf(PropTypes.string),
	title: PropTypes.string,
};

export { ListOfElements };
