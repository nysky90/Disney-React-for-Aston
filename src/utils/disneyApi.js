import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react';

export const disneyApi = createApi({
	reducerPath: 'disneyApi',
	baseQuery: retry(fetchBaseQuery({ baseUrl: 'https://api.disneyapi.dev/' }), {
		maxRetries: 5,
	}),
	endpoints: (build) => ({
		getCharacters: build.query({
			query: (number = 1) => `characters?page=${number}`,
			transformResponse: ({ data }) =>
				data.map(({ name, _id, imageUrl }) => {
					return { name, id: _id, imageUrl };
				}),
		}),
		searchCharacter: build.query({
			query: (name) => `/character?name=${name}`,
			transformResponse: ({ data }) =>
				data.map(({ name, _id, imageUrl }) => {
					return { name, id: _id, imageUrl };
				}),
		}),
		getCharacterById: build.query({
			query: (id = '') => `/characters/${id}`,
		}),
	}),
});

export const {
	useGetCharactersQuery,
	useSearchCharacterQuery,
	useGetCharacterByIdQuery,
} = disneyApi;
