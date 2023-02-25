import gif from './img/errorApi.gif';

import s from './errorApi.module.scss';

const ErrorApi = () => {
	return (
		<div className={s.errorApi}>
			<h2 className={s.errorApi__title}>Dont panic!</h2>
			<img className={s.errorApi__img} src={gif} alt='ErrorApi' />
			<p className={s.errorApi__text}>Try one more time!</p>
		</div>
	);
};

export { ErrorApi };
