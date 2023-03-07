import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { routesConfig } from '../../routes/routesConfig';
import { useDispatch } from 'react-redux';

import { PrivateRoute } from '../../routes/privateRoute';
import { Header } from '../../components';
import { HistoryPage, FavoritePage } from '../../containers';
import { init } from '../../store/';

function App() {
	const dispatch = useDispatch();
	dispatch(init());

	return (
		<div>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route element={<PrivateRoute />}>
						<Route path='/history' element={<HistoryPage />} />
						<Route path='/favorite' element={<FavoritePage />} />
					</Route>
					{routesConfig.map((item, i) => (
						<Route key={i} {...item} />
					))}
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export { App };
