import { Link } from 'react-router-dom';

import one from './img/hero_one.jpg';
import all from './img/hero_all.jpg';

import s from './mainPage.module.scss';

const MainPage = () => {
	return (
		<div className={s.main}>
			<div className={s.main__item}>
				<Link to='/characters?page=1'>
					<img src={all} alt='All' />
					<p className={s.main__text}>Let's explore all character`s!</p>
				</Link>
			</div>
			<div className={s.main__item}>
				<Link to='/search'>
					<img src={one} alt='One' />
					<p className={s.main__text}>Let's find your character!</p>
				</Link>
			</div>
		</div>
	);
};

export { MainPage };
