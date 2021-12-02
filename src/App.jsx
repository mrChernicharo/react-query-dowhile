import { useEffect, useRef, useState } from 'react';
import logo from './logo.svg';
import './App.css';

const API_URL = 'http://127.0.0.1:3333/';

function App() {
	const [players, setPlayers] = useState([]);
	const [playerName, setPlayerName] = useState('');
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const nameInputRef = useRef(null);

	const handleNameInput = e => {
		setPlayerName(e.target.value);
		console.log(playerName);
	};

	const getData = async () => {
		try {
			setLoading(true);
			const response = await fetch(API_URL);
			const data = await response.json();
			setPlayers(data);
		} catch (err) {
			setError(err.message);
		} finally {
			setLoading(false);
		}
	};

	const postData = async () => {
		try {
			const response = await fetch(API_URL, {
				method: 'POST',
				body: JSON.stringify({ name: playerName }),
				headers: {
					'Content-Type': 'application/json',
				},
			});

			const resData = await response.json();
			console.log(resData);
			getData();
		} catch (err) {
			setError(err.message);
		}
	};

	useEffect(() => getData(), []);

	if (loading) return <div>Loading...</div>;
	if (error) return <div>{error}</div>;

	return (
		<div>
			<ul>
				{players.map(player => (
					<li key={player.id}>{player.name}</li>
				))}
			</ul>
			<input ref={nameInputRef} type="text" onChange={handleNameInput} />
			<button type="button" onClick={() => postData()}>
				Criar Jogador
			</button>
		</div>
	);
}

export default App;
