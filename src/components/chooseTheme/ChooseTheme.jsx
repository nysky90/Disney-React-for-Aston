import { UiButton } from '../ui/uiButton/UiButton';
import { useTheme } from '../../context/ThemeContext';
const ChooseTheme = () => {
	const theme = useTheme();

	return (
		<>
			<UiButton onClick={() => theme.change('girls')} text='Girl' />
			<UiButton onClick={() => theme.change('boys')} text='Boy' />
		</>
	);
};

export { ChooseTheme };
