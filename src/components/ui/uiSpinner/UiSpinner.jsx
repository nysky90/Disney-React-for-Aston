import spinner from './img/spinner.svg';
import s from './uiSpinner.module.scss';

const UiSpinner = () => {
	return <img className={s.spinner} src={spinner} alt='spinner' />;
};

export { UiSpinner };
