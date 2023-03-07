import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { App } from './containers';
import { ThemeProvider } from './context/ThemeContext';
import { store } from './store/store';

import './styles/index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<ThemeProvider>
				<App />
			</ThemeProvider>
		</Provider>
	</React.StrictMode>
);
