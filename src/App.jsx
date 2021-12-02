import { useEffect, useRef, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { useFetchPlayers } from './hooks/useFetchPlayers';
import { useSetPlayer } from './hooks/useSetPlayer';

function App() {
	const { data, isLoading, error, isError } = useFetchPlayers();
	const setPlayerMutation = useSetPlayer();

	const [playerName, setPlayerName] = useState('');

	const nameInputRef = useRef(null);

	const handleNameInput = e => {
		setPlayerName(e.target.value);
	};

	if (isLoading) return <div>Loading...</div>;
	if (isError) return <div>{error}</div>;

	return (
		<div>
			<ul>
				{data.map(player => (
					<li key={player.id}>{player.name}</li>
				))}
			</ul>
			<hr />
			<input ref={nameInputRef} type="text" onChange={handleNameInput} />
			<button
				type="button"
				onClick={() => setPlayerMutation.mutate(playerName)}
			>
				Criar Jogador
			</button>
		</div>
	);
}

export default App;
