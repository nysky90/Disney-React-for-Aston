import {
	SignInPage,
	SearchPage,
	MainPage,
	CharacterInfoPage,
	CharactersPage,
	LoginPage,
} from '../containers';

export const routesConfig = [
	{
		path: '/',
		element: <MainPage />,
	},
	{
		path: '/characters',
		element: <CharactersPage />,
	},
	{
		path: '/character',
		element: <SearchPage />,
	},
	{
		path: '/characters/:id',
		element: <CharacterInfoPage />,
	},
	{
		path: '/login',
		element: <LoginPage />,
	},
	{
		path: '/registration',
		element: <SignInPage />,
	},
];
