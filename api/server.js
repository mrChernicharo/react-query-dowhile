import express, { json } from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(json());

const players = [
	{ id: 1, name: 'Felipe' },
	{ id: 2, name: 'Mari' },
	{ id: 3, name: 'Scott' },
];

app.get('/', (req, res) => {
	setTimeout(() => {
		res.json(players);
	}, 1000);
});

app.post('/', (req, res) => {
	const { name } = req.body;
	console.log(req.body);
	const newPlayer = {
		id: players.length + 1,
		name,
	};
	players.push(newPlayer);
	res.json(newPlayer);
});

app.listen(3333, (req, res) => {
	console.log('listening to Port 3333');
});
