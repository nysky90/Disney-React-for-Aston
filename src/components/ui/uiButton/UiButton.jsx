import PropTypes from 'prop-types';
import cn from 'classnames';

import s from './uiButton.module.scss';

const UiButton = ({
	text,
	onClick,
	disabled = false,
	theme = 'girls',
	size = 'medium',
}) => {
	return (
		<button
			className={cn(s.button, s[theme], s[size])}
			onClick={onClick}
			disabled={disabled}
		>
			{text}
		</button>
	);
};

UiButton.propTypes = {
	text: PropTypes.string,
	onClick: PropTypes.func,
	disabled: PropTypes.bool,
	classes: PropTypes.string,
};

export { UiButton };
