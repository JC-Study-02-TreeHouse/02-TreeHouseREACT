// Lesson 1
/*
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
// the extends is what we added
class Counter extends React.Component {
	render() {
		return (
			<div className='counter'>
				<button className='counter-action decrement'> - </button>
				<span className='counter-score'>{this.props.score}</span>
				<button className='counter-action increment'> + </button>
			</div>
		);
	}
}

const App = (props) => {
	return (
		<div className='scoreboard'>
			<Header title='Scoreboard' totalPlayers={props.initialPlayers.length} />

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

// Lesson 2
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

			<Counter />
		</div>
	);
};

class Counter extends React.Component {
	state = {
		score: 0,
	};

	render() {
		return (
			<div className='counter'>
				<button className='counter-action decrement'> - </button>
				<span className='counter-score'>{this.state.score}</span>
				<button className='counter-action increment'> + </button>
			</div>
		);
	}
}

const App = (props) => {
	return (
		<div className='scoreboard'>
			<Header title='Scoreboard' totalPlayers={props.initialPlayers.length} />

			{props.initialPlayers.map((player) => (
				<Player name={player.name} key={player.id.toString()} />
			))}
		</div>
	);
};

ReactDOM.render(
	<App initialPlayers={players} />,
	document.getElementById('root')
);

// Lesson 3
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

			<Counter />
		</div>
	);
};

class Counter extends React.Component {
	state = {
		score: 0,
	};

	incrementScore() {
		console.log('Hi, from inside incrementScore!');
	}

	render() {
		return (
			<div className='counter'>
				<button className='counter-action decrement'> - </button>
				<span className='counter-score'>{this.state.score}</span>
				<button
					className='counter-action increment'
					onClick={this.incrementScore}
				>
					{' '}
					+{' '}
				</button>
			</div>
		);
	}
}

const App = (props) => {
	return (
		<div className='scoreboard'>
			<Header title='Scoreboard' totalPlayers={props.initialPlayers.length} />

			{props.initialPlayers.map((player) => (
				<Player name={player.name} key={player.id.toString()} />
			))}
		</div>
	);
};

ReactDOM.render(
	<App initialPlayers={players} />,
	document.getElementById('root')
);

// Lesson 4
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

			<Counter />
		</div>
	);
};

class Counter extends React.Component {
	state = {
		score: 0,
	};

	incrementScore() {
		this.setState({
			score: this.state.score + 1,
		});
	}

	render() {
		return (
			<div className='counter'>
				<button className='counter-action decrement'> - </button>
				<span className='counter-score'>{this.state.score}</span>
				<button
					className='counter-action increment'
					onClick={this.incrementScore}
				>
					{' '}
					+{' '}
				</button>
			</div>
		);
	}
}

const App = (props) => {
	return (
		<div className='scoreboard'>
			<Header title='Scoreboard' totalPlayers={props.initialPlayers.length} />

			{props.initialPlayers.map((player) => (
				<Player name={player.name} key={player.id.toString()} />
			))}
		</div>
	);
};

ReactDOM.render(
	<App initialPlayers={players} />,
	document.getElementById('root')
);

// Lesson 5
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

			<Counter />
		</div>
	);
};

class Counter extends React.Component {
	state = {
		score: 0,
	};

	incrementScore = () => {
		this.setState({
			score: this.state.score + 1,
		});
	};

	decrementScore = () => {
		this.setState({
			score: this.state.score - 1,
		});
	};

	render() {
		return (
			<div className='counter'>
				<button
					className='counter-action decrement'
					onClick={this.decrementScore}
				>
					{' '}
					-{' '}
				</button>
				<span className='counter-score'>{this.state.score}</span>
				<button
					className='counter-action increment'
					onClick={this.incrementScore}
				>
					{' '}
					+{' '}
				</button>
			</div>
		);
	}
}

const App = (props) => {
	return (
		<div className='scoreboard'>
			<Header title='Scoreboard' totalPlayers={props.initialPlayers.length} />

			{props.initialPlayers.map((player) => (
				<Player name={player.name} key={player.id.toString()} />
			))}
		</div>
	);
};

ReactDOM.render(
	<App initialPlayers={players} />,
	document.getElementById('root')
);

// Lesson 6
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

			<Counter />
		</div>
	);
};

class Counter extends React.Component {
	state = {
		score: 0,
	};

	incrementScore = () => {
		this.setState((prevState) => ({
			score: prevState.score + 1,
		}));
	};

	decrementScore = () => {
		this.setState((prevState) => ({
			score: prevState.score - 1,
		}));
	};

	render() {
		return (
			<div className='counter'>
				<button
					className='counter-action decrement'
					onClick={this.decrementScore}
				>
					{' '}
					-{' '}
				</button>
				<span className='counter-score'>{this.state.score}</span>
				<button
					className='counter-action increment'
					onClick={this.incrementScore}
				>
					{' '}
					+{' '}
				</button>
			</div>
		);
	}
}

const App = (props) => {
	return (
		<div className='scoreboard'>
			<Header title='Scoreboard' totalPlayers={props.initialPlayers.length} />

			{props.initialPlayers.map((player) => (
				<Player name={player.name} key={player.id.toString()} />
			))}
		</div>
	);
};

ReactDOM.render(
	<App initialPlayers={players} />,
	document.getElementById('root')
);

// Lesson 7
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

			<Counter />
		</div>
	);
};

class Counter extends React.Component {
	state = {
		score: 0,
	};

	incrementScore = () => {
		this.setState((prevState) => ({
			score: prevState.score + 1,
		}));
	};

	decrementScore = () => {
		this.setState((prevState) => ({
			score: prevState.score - 1,
		}));
	};

	render() {
		return (
			<div className='counter'>
				<button
					className='counter-action decrement'
					onClick={this.decrementScore}
				>
					{' '}
					-{' '}
				</button>
				<span className='counter-score'>{this.state.score}</span>
				<button
					className='counter-action increment'
					onClick={this.incrementScore}
				>
					{' '}
					+{' '}
				</button>
			</div>
		);
	}
}

class App extends React.Component {
	state = {
		players: [
			{
				name: 'Guil',
				id: 1,
			},
			{
				name: 'Treasure',
				id: 2,
			},
			{
				name: 'Ashley',
				id: 3,
			},
			{
				name: 'James',
				id: 4,
			},
		],
	};

	render() {
		return (
			<div className='scoreboard'>
				<Header title='Scoreboard' totalPlayers={this.state.players.length} />

				{this.state.players.map((player) => (
					<Player name={player.name} key={player.id.toString()} />
				))}
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
*/
// Lesson 8
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
			<span className='player-name'>
				<button
					className='remove-player'
					onClick={() => props.removePlayer(props.id)}
				>
					✖
				</button>
				{props.name}
			</span>

			<Counter />
		</div>
	);
};

class Counter extends React.Component {
	state = {
		score: 0,
	};

	incrementScore = () => {
		this.setState((prevState) => ({
			score: prevState.score + 1,
		}));
	};

	decrementScore = () => {
		this.setState((prevState) => ({
			score: prevState.score - 1,
		}));
	};

	render() {
		return (
			<div className='counter'>
				<button
					className='counter-action decrement'
					onClick={this.decrementScore}
				>
					{' '}
					-{' '}
				</button>
				<span className='counter-score'>{this.state.score}</span>
				<button
					className='counter-action increment'
					onClick={this.incrementScore}
				>
					{' '}
					+{' '}
				</button>
			</div>
		);
	}
}

class App extends React.Component {
	state = {
		players: [
			{
				name: 'Guil',
				id: 1,
			},
			{
				name: 'Treasure',
				id: 2,
			},
			{
				name: 'Ashley',
				id: 3,
			},
			{
				name: 'James',
				id: 4,
			},
		],
	};

	handleRemovePlayer = (id) => {
		this.setState((prevState) => {
			return {
				players: prevState.players.filter((p) => p.id !== id),
			};
		});
	};

	render() {
		return (
			<div className='scoreboard'>
				<Header title='Scoreboard' totalPlayers={this.state.players.length} />

				{this.state.players.map((player) => (
					<Player
						name={player.name}
						id={player.id}
						key={player.id.toString()}
						removePlayer={this.handleRemovePlayer}
					/>
				))}
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
