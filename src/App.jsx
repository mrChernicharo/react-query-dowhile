import { useEffect, useRef, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { useFetchPlayers } from './hooks/useFetchPlayers';

const API_URL = 'http://127.0.0.1:3333/';

function App() {
	const fetchPlayers = useFetchPlayers();
	console.log(fetchPlayers);

	// const [playerName, setPlayerName] = useState('');
	// const [error, setError] = useState(null);

	// const nameInputRef = useRef(null);

	// const handleNameInput = e => {
	// 	setPlayerName(e.target.value);
	// 	console.log(playerName);
	// };

	// const getData = async () => {
	// 	try {
	// 	} catch (err) {
	// 		setError(err.message);
	// 	}
	// };

	// const postData = async () => {
	// 	try {
	// 		const response = await fetch(API_URL, {
	// 			method: 'POST',
	// 			body: JSON.stringify({ name: playerName }),
	// 			headers: {
	// 				'Content-Type': 'application/json',
	// 			},
	// 		});

	// 		const resData = await response.json();
	// 		console.log(resData);
	// 		getData();
	// 	} catch (err) {
	// 		setError(err.message);
	// 	}
	// };

	return <div>Hey</div>;

	// if (loading) return <div>Loading...</div>;
	// if (error) return <div>{error}</div>;

	// return (
	// 	<div>
	// 		<ul>
	// 			{players.map(player => (
	// 				<li key={player.id}>{player.name}</li>
	// 			))}
	// 		</ul>
	// 		<hr />
	// 		<input ref={nameInputRef} type="text" onChange={handleNameInput} />
	// 		<button type="button" onClick={() => postData()}>
	// 			Criar Jogador
	// 		</button>
	// 	</div>
	// );
}

export default App;
