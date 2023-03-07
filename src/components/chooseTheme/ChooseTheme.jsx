import PropTypes from 'prop-types';

import { UiButton } from '../ui/uiButton/UiButton';
import { useTheme } from '../../context/ThemeContext';
const ChooseTheme = () => {
	const isTheme = useTheme();

	return (
		<>
			<UiButton onClick={() => isTheme.change('girls')} text='Girl' />
			<UiButton onClick={() => isTheme.change('boys')} text='Boy' />
		</>
	);
};

export { ChooseTheme };
