import cn from 'classnames';

import spinner from './img/spinner.svg';

import s from './uiSpinner.module.scss';

const UiSpinner = ({ size = 'medium' }) => {
	return <img className={cn(s.spinner, s[size])} src={spinner} alt='spinner' />;
};

export { UiSpinner };
