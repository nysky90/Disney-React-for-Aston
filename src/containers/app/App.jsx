import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { routesConfig } from '../../routes/routesConfig';
import { useDispatch } from 'react-redux';

import { PrivateRoute } from '../../routes/privateRoute';
import { Header } from '../../components';
import { HistoryPage, PersonalPage } from '../../containers';
import { init } from '../../store/slice/user/userSlice';

function App() {
	const dispatch = useDispatch();
	dispatch(init());
	return (
		<div>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route element={<PrivateRoute />}>
						<Route path='/personPage' element={<PersonalPage />} />
						<Route path='/history' element={<HistoryPage />} />
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
