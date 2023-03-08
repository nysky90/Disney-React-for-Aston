import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext(null);
const body = document.querySelector('body');

const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState(localStorage.getItem('theme'));

	body.className = theme;

	const change = (theme) => {
		setTheme(theme);
		localStorage.setItem('theme', theme);
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
