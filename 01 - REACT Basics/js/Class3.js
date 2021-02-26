// Lesson 1
/*
const Header = (props) => {
	return (
		<header>
			<h1>{props.title}</h1>
			<span className='stats'>Players: {props.totalPlayers}</span>
		</header>
	);
};

const Player = () => {
	return (
		<div className='player'>
			<span className='player-name'>Guil</span>

			<Counter />
		</div>
	);
};

const Counter = () => {
	return (
		<div className='counter'>
			<button className='counter-action decrement'> - </button>
			<span className='counter-score'>35</span>
			<button className='counter-action increment'> + </button>
		</div>
	);
};

const App = () => {
	return (
		<div className='scoreboard'>
			<Header title='Scoreboard' totalPlayers={1} />

			//{ Players list }
			<Player />
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));

// Lesson 2
const Header = (props) => {
	return (
		<header>
			<h1>{props.title}</h1>
			<span className='stats'>Players: {props.totalPlayers}</span>
		</header>
	);
};

const Player = (props) => {
	return (
		<div className='player'>
			<span className='player-name'>{props.name}</span>

			<Counter score={props.score} />
		</div>
	);
};

const Counter = (props) => {
	return (
		<div className='counter'>
			<button className='counter-action decrement'> - </button>
			<span className='counter-score'>{props.score}</span>
			<button className='counter-action increment'> + </button>
		</div>
	);
};

const App = () => {
	return (
		<div className='scoreboard'>
			<Header title='Scoreboard' totalPlayers={1} />

			<Player name='Guil' score={50} />
			<Player name='Treasure' score={90} />
			<Player name='Ashley' score={85} />
			<Player name='James' score={80} />
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));

// Lesson 3
const players = [
	{
		name: 'Guil',
		score: 50,
	},
	{
		name: 'Treasure',
		score: 85,
	},
	{
		name: 'Ashley',
		score: 95,
	},
	{
		name: 'James',
		score: 80,
	},
];

const Header = (props) => {
	return (
		<header>
			<h1>{props.title}</h1>
			<span className='stats'>Players: {props.totalPlayers}</span>
		</header>
	);
};

const Player = (props) => {
	return (
		<div className='player'>
			<span className='player-name'>{props.name}</span>

			<Counter score={props.score} />
		</div>
	);
};

const Counter = (props) => {
	return (
		<div className='counter'>
			<button className='counter-action decrement'> - </button>
			<span className='counter-score'>{props.score}</span>
			<button className='counter-action increment'> + </button>
		</div>
	);
};

const App = (props) => {
	return (
		<div className='scoreboard'>
			<Header title='Scoreboard' totalPlayers={props.initialPlayers.length} />

			{props.initialPlayers.map((player) => (
				<Player name={player.name} score={player.score} />
			))}
		</div>
	);
};

ReactDOM.render(
	<App initialPlayers={players} />,
	document.getElementById('root')
);
*/
//Lesson 4
const players = [
	{
		name: 'Guil',
		score: 50,
		id: 1,
	},
	{
		name: 'Treasure',
		score: 85,
		id: 2,
	},
	{
		name: 'Ashley',
		score: 95,
		id: 3,
	},
	{
		name: 'James',
		score: 80,
		id: 4,
	},
];

const Header = (props) => {
	return (
		<header>
			<h1>{props.title}</h1>
			<span className='stats'>Players: {props.totalPlayers}</span>
		</header>
	);
};

const Player = (props) => {
	return (
		<div className='player'>
			<span className='player-name'>{props.name}</span>

			<Counter score={props.score} />
		</div>
	);
};

const Counter = (props) => {
	return (
		<div className='counter'>
			<button className='counter-action decrement'> - </button>
			<span className='counter-score'>{props.score}</span>
			<button className='counter-action increment'> + </button>
		</div>
	);
};

const App = (props) => {
	return (
		<div className='scoreboard'>
			<Header title='Scoreboard' totalPlayers={props.initialPlayers.length} />

			{/* Players list */}
			{props.initialPlayers.map((player) => (
				<Player
					name={player.name}
					score={player.score}
					key={player.id.toString()}
				/>
			))}
		</div>
	);
};

ReactDOM.render(
	<App initialPlayers={players} />,
	document.getElementById('root')
);
