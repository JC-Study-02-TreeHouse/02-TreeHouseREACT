// Lesson 1
/*
import React from 'react';

const Header = (props) => {
	return (
		<header>
			<h1>{props.title}</h1>
			<span className='stats'>Players: {props.totalPlayers}</span>
		</header>
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

export default App;

// Lesson 2

import React from 'react';
import Header from './Header';
import Player from './Player';

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

export default App;

// Lesson 3

import React, { Component } from 'react';
import Header from './Header.js';
import Player from './Player.js';

class App extends Component {
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

export default App;
*/
// Lesson 4
/*
import React, { Component } from 'react';
import Header from './Header';
import Player from './Player';

class App extends Component {
	state = {
		players: [
			{
				name: 'Guil',
				score: 0,
				id: 1,
			},
			{
				name: 'Treasure',
				score: 0,
				id: 2,
			},
			{
				name: 'Ashley',
				score: 0,
				id: 3,
			},
			{
				name: 'James',
				score: 0,
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
						score={player.score}
						id={player.id}
						key={player.id.toString()}
						removePlayer={this.handleRemovePlayer}
					/>
				))}
			</div>
		);
	}
}

export default App;
*/
// Lesson 5
/*
import React, { Component } from 'react';
import Header from './Header';
import Player from './Player';

class App extends Component {
	state = {
		players: [
			{
				name: 'Guil',
				score: 0,
				id: 1,
			},
			{
				name: 'Treasure',
				score: 0,
				id: 2,
			},
			{
				name: 'Ashley',
				score: 0,
				id: 3,
			},
			{
				name: 'James',
				score: 0,
				id: 4,
			},
		],
	};

	handleScoreChange = (delta) => {
		// this.setState( prevState => ({
		//   score: prevState.score + 1
		// }));
		console.log(delta);
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
				{this.state.players.map((player, index) => (
					<Player
						name={player.name}
						score={player.score}
						id={player.id}
						key={player.id.toString()}
						index={index}
						changeScore={this.handleScoreChange}
						removePlayer={this.handleRemovePlayer}
					/>
				))}
			</div>
		);
	}
}

export default App;
*/
// Lesson 6
/*
import React, { Component } from 'react';
import Header from './Header';
import Player from './Player';

class App extends Component {
  state = {
    players: [
      {
        name: "Guil",
        score: 0,
        id: 1
      },
      {
        name: "Treasure",
        score: 0,
        id: 2
      },
      {
        name: "Ashley",
        score: 0,
        id: 3
      },
      {
        name: "James",
        score: 0,
        id: 4
      }
    ]
  };

  handleScoreChange = (index, delta) => {
    this.setState( prevState => {
      // New 'players' array – a copy of the previous `players` state
      const updatedPlayers = [ ...prevState.players ];
      // A copy of the player object we're targeting
      const updatedPlayer = { ...updatedPlayers[index] };

      // Update the target player's score
      updatedPlayer.score += delta;
      // Update the 'players' array with the target player's latest score
      updatedPlayers[index] = updatedPlayer;

      // Update the `players` state without mutating the original state
      return {
        players: updatedPlayers
      };
    });
  }

  handleRemovePlayer = (id) => {
    this.setState( prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id)
      };
    });
  }

  render() {
    return (
      <div className="scoreboard">
        <Header 
          title="Scoreboard" 
          totalPlayers={this.state.players.length} 
        />
        {this.state.players.map( (player, index) =>
			<Player 
			  name={player.name}
			  score={player.score}
			  id={player.id}
			  key={player.id.toString()} 
			  index={index}
			  changeScore={this.handleScoreChange}
			  removePlayer={this.handleRemovePlayer}           
			/>
		  )}
		</div>
	  );
	}
  }
  
  export default App;
*/
// Lesson 7
/*
import React, { Component } from 'react';
import Header from './Header';
import Player from './Player';

class App extends Component {
	state = {
		players: [
			{
				name: 'Guil',
				score: 0,
				id: 1,
			},
			{
				name: 'Treasure',
				score: 0,
				id: 2,
			},
			{
				name: 'Ashley',
				score: 0,
				id: 3,
			},
			{
				name: 'James',
				score: 0,
				id: 4,
			},
		],
	};

	handleScoreChange = (index, delta) => {
		this.setState((prevState) => {
			// New 'players' array – a copy of the previous `players` state
			const updatedPlayers = [...prevState.players];
			// A copy of the player object we're targeting
			const updatedPlayer = { ...updatedPlayers[index] };

			// Update the target player's score
			updatedPlayer.score += delta;
			// Update the 'players' array with the target player's latest score
			updatedPlayers[index] = updatedPlayer;

			// Update the `players` state without mutating the original state
			return {
				players: updatedPlayers,
			};
		});
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
				<Header title='Scoreboard' players={this.state.players} />
				{this.state.players.map((player, index) => (
					<Player
						name={player.name}
						score={player.score}
						id={player.id}
						key={player.id.toString()}
						index={index}
						changeScore={this.handleScoreChange}
						removePlayer={this.handleRemovePlayer}
					/>
				))}
			</div>
		);
	}
}
export default App;
*/
// Lesson 8
/*
import React, { Component } from 'react';
import Header from './Header';
import Player from './Player';
import AddPlayerForm from './AddPlayerForm';

class App extends Component {
	state = {
		players: [
			{
				name: 'Guil',
				score: 0,
				id: 1,
			},
			{
				name: 'Treasure',
				score: 0,
				id: 2,
			},
			{
				name: 'Ashley',
				score: 0,
				id: 3,
			},
			{
				name: 'James',
				score: 0,
				id: 4,
			},
		],
	};

	handleScoreChange = (index, delta) => {
		this.setState((prevState) => {
			// New 'players' array – a copy of the previous `players` state
			const updatedPlayers = [...prevState.players];
			// A copy of the player object we're targeting
			const updatedPlayer = { ...updatedPlayers[index] };

			// Update the target player's score
			updatedPlayer.score += delta;
			// Update the 'players' array with the target player's latest score
			updatedPlayers[index] = updatedPlayer;

			// Update the `players` state without mutating the original state
			return {
				players: updatedPlayers,
			};
		});
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
				<Header title='Scoreboard' players={this.state.players} />
				{this.state.players.map((player, index) => (
					<Player
						name={player.name}
						score={player.score}
						id={player.id}
						key={player.id.toString()}
						index={index}
						changeScore={this.handleScoreChange}
						removePlayer={this.handleRemovePlayer}
					/>
				))}

				<AddPlayerForm />
			</div>
		);
	}
}
export default App;
*/
// Lesson 9
/*
import React, { Component } from 'react';
import Header from './Header';
import Player from './Player';
import AddPlayerForm from './AddPlayerForm';

class App extends Component {
	state = {
		players: [
			{
				name: 'Guil',
				score: 0,
				id: 1,
			},
			{
				name: 'Treasure',
				score: 0,
				id: 2,
			},
			{
				name: 'Ashley',
				score: 0,
				id: 3,
			},
			{
				name: 'James',
				score: 0,
				id: 4,
			},
		],
	};

	// player id counter
	prevPlayerId = 4;

	handleScoreChange = (index, delta) => {
		this.setState((prevState) => {
			// New 'players' array – a copy of the previous `players` state
			const updatedPlayers = [...prevState.players];
			// A copy of the player object we're targeting
			const updatedPlayer = { ...updatedPlayers[index] };

			// Update the target player's score
			updatedPlayer.score += delta;
			// Update the 'players' array with the target player's latest score
			updatedPlayers[index] = updatedPlayer;

			// Update the `players` state without mutating the original state
			return {
				players: updatedPlayers,
			};
		});
	};

	handleAddPlayer = (name) => {
		this.setState({
			players: [
				...this.state.players,
				{
					name,
					score: 0,
					id: (this.prevPlayerId += 1),
				},
			],
		});
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
				<Header title='Scoreboard' players={this.state.players} />
				{this.state.players.map((player, index) => (
					<Player
						name={player.name}
						score={player.score}
						id={player.id}
						key={player.id.toString()}
						index={index}
						changeScore={this.handleScoreChange}
						removePlayer={this.handleRemovePlayer}
					/>
				))}

				<AddPlayerForm addPlayer={this.handleAddPlayer} />
			</div>
		);
	}
}

export default App;
*/
// Lesson 10

import React, { Component } from 'react';
import Header from './Header';
import Player from './Player';
import AddPlayerForm from './AddPlayerForm';

class App extends Component {
	state = {
		players: [
			{
				name: 'Guil',
				score: 0,
				id: 1,
			},
			{
				name: 'Treasure',
				score: 0,
				id: 2,
			},
			{
				name: 'Ashley',
				score: 0,
				id: 3,
			},
			{
				name: 'James',
				score: 0,
				id: 4,
			},
		],
	};

	// player id counter
	prevPlayerId = 4;

	handleScoreChange = (index, delta) => {
		this.setState((prevState) => {
			// New 'players' array – a copy of the previous `players` state
			const updatedPlayers = [...prevState.players];
			// A copy of the player object we're targeting
			const updatedPlayer = { ...updatedPlayers[index] };

			// Update the target player's score
			updatedPlayer.score += delta;
			// Update the 'players' array with the target player's latest score
			updatedPlayers[index] = updatedPlayer;

			// Update the `players` state without mutating the original state
			return {
				players: updatedPlayers,
			};
		});
	};

	handleAddPlayer = (name) => {
		this.setState((prevState) => {
			return {
				players: [
					...prevState.players,
					{
						name,
						score: 0,
						id: (this.prevPlayerId += 1),
					},
				],
			};
		});
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
				<Header title='Scoreboard' players={this.state.players} />
				{this.state.players.map((player, index) => (
					<Player
						name={player.name}
						score={player.score}
						id={player.id}
						key={player.id.toString()}
						index={index}
						changeScore={this.handleScoreChange}
						removePlayer={this.handleRemovePlayer}
					/>
				))}

				<AddPlayerForm addPlayer={this.handleAddPlayer} />
			</div>
		);
	}
}

export default App;
