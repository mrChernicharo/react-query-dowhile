import { QueryClient, useMutation, useQueryClient } from 'react-query';

const API_URL = 'http://127.0.0.1:3333/';

const postPlayer = async name => {
	await fetch(API_URL, {
		method: 'POST',
		body: JSON.stringify({ name }),
		headers: {
			'Content-Type': 'application/json',
		},
	});
};

export const useSetPlayer = () => {
	const queryClient = useQueryClient();

	return useMutation(postPlayer, {
		onSuccess: () => {
			console.log('request ok!');
			// notifica que os dados da query 'players' mudaram e precisa ser refetched
			// notifies 'players' query that it's data has gone stale, which automatically triggers a refetch
			queryClient.invalidateQueries('players');
		},
	});
};
