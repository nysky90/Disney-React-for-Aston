import {
	SignIn,
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
	{
		path: '/login',
		element: <SignIn />,
	},
	{
		path: '/registration',
		element: <SignIn />,
	},
];
