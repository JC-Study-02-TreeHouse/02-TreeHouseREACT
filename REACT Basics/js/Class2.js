// Lesson 1
/*
function Header() {
	return (
		<header>
			<h1>Scoreboard</h1>
			<span className='stats'>Players: 1</span>
		</header>
	);
}

ReactDOM.render(header, document.getElementById('root'));


// Lesson 2

function Header() {
	return (
		<header>
			<h1>Scoreboard</h1>
			<span className='stats'>Players: 1</span>
		</header>
	);
}

ReactDOM.render(<Header />, document.getElementById('root'));

// Lesson 3
const Header = () => {
	return (
		<header>
			<h1>Scoreboard</h1>
			<span className='stats'>Players: 1</span>
		</header>
	);
};

ReactDOM.render(<Header />, document.getElementById('root'));

// Lesson 4
const Header = () => {
	return (
		<header>
			<h1>Scoreboard</h1>
			<span className='stats'>Players: 1</span>
		</header>
	);
};

const Player = () => {
	return (
		<div className='player'>
			<span className='player-name'>Guil</span>

			<div className='counter'>
				<button className='counter-action decrement'> - </button>
				<span className='counter-score'>35</span>
				<button className='counter-action increment'> + </button>
			</div>
		</div>
	);
};

ReactDOM.render(<Player />, document.getElementById('root'));
*/
// Lesson 5
const Header = () => {
	return (
		<header>
			<h1>Scoreboard</h1>
			<span className='stats'>Players: 1</span>
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

// Players list
const App = () => {
	return (
		<div className='scoreboard'>
			<Header />

			<Player />
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
/*
// Lesson 6
const Header = () => {
  return (
    <header>
      <h1>Scoreboard</h1>
      <span className="stats">Players: 1</span>
    </header>
  );
}

const Player = () => {
  return (
    <div className="player">
      <span className="player-name">
        Guil
      </span>

      <Counter />
    </div>
  );
}

const Counter = () => {
  return (
    <div className="counter">
      <button className="counter-action decrement"> - </button>
      <span className="counter-score">35</span>
      <button className="counter-action increment"> + </button>
    </div>
  );
}

const App = () => {
  return (
    <div className="scoreboard">
      <Header />

      // Players list
      <Player />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
*/
