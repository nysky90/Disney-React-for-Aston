import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext(null);
const body = document.querySelector('body');

const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState('pink');

	const change = (theme) => {
		setTheme(theme);
		body.className = theme;
	};

	return (
		<ThemeContext.Provider
			value={{
				theme,
				change,
			}}
		>
			{children}
		</ThemeContext.Provider>
	);
};

export { ThemeProvider };

export const useTheme = () => useContext(ThemeContext);
