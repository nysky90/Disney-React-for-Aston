import { UiButton } from '../ui/uiButton/UiButton';
import { useTheme } from '../../context/ThemeContext';

import s from './chooseTheme.module.scss';

const ChooseTheme = () => {
	const theme = useTheme();

	return (
		<div className={s.choose}>
			<h3>Choose your theme</h3>
			<div>
				<UiButton
					onClick={() => theme.change('girls')}
					text='for Girls'
					theme={theme.theme}
				/>
				<UiButton
					onClick={() => theme.change('boys')}
					text='for Boys'
					theme={theme.theme}
				/>
			</div>
		</div>
	);
};

export { ChooseTheme };
