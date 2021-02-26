// Lesson 2
/*
import React from 'react';

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

export default Player;
*/
// Lesson 3
/*
import React from 'react';
import Counter from './Counter';

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

export default Player;
*/
// Lesson 4
/*
import React from 'react';
import Counter from './Counter';

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

			<Counter score={props.score} />
		</div>
	);
};

export default Player;
*/
// Lesson 5 6 7 8 9 10

import React from 'react';
import Counter from './Counter';

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

			<Counter
				score={props.score}
				index={props.index}
				changeScore={props.changeScore}
			/>
		</div>
	);
};

export default Player;
