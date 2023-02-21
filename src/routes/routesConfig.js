import {
	SearchPage,
	MainPage,
	CharacterInfoPage,
	CharacterPage,
} from '../containers';

export const routesConfig = [
	{
		path: '/',
		element: <MainPage />,
	},
	{
		path: '/characters',
		element: <CharacterPage />,
	},
	{
		path: '/search',
		element: <SearchPage />,
	},
	{
		path: '/characters/:id',
		element: <CharacterInfoPage />,
	},
];
