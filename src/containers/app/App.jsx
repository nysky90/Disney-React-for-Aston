import { Route, Routes, BrowserRouter } from 'react-router-dom';

import { Header } from '../../components';
import { routesConfig } from '../../routes/routesConfig';

function App() {
	return (
		<div>
			<BrowserRouter>
				<Header />
				<Routes>
					{routesConfig.map((item, i) => (
						<Route key={i} {...item} />
					))}
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export { App };
