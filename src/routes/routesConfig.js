import {CharacterPage,SearchPage,MainPage} from "../containers";

export const routesConfig = [
    {
        path: '/',
        element: <MainPage/>
    },
    {
        path: '/characters',
        element: <CharacterPage/>
    },
    {
        path: '/search',
        element: <SearchPage/>
    },
]    
