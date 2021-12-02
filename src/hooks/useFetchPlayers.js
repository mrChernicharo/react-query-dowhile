import { useQuery } from 'react-query';

const API_URL = 'http://127.0.0.1:3333/';

const fetchPlayers = async () => {
	const response = await fetch(API_URL);
	const data = await response.json();
	return data;
};

export const useFetchPlayers = () => {
	return useQuery('players', fetchPlayers, { refetchOnWindowFocus: false });
};
