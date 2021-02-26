// Lesson 1 2 3
/*
import React from 'react';

const Counter = (props) => {
	let index = props.index;

	return (
		<div className='counter'>
			<button
				className='counter-action decrement'
				onClick={() => props.changeScore(index, -1)}
			>
				{' '}
				-{' '}
			</button>
			<span className='counter-score'>{props.score}</span>
			<button
				className='counter-action increment'
				onClick={() => props.changeScore(index, 1)}
			>
				{' '}
				+{' '}
			</button>
		</div>
	);
};

export default Counter;
*/
// Lesson 4 5 6

import React from 'react';
import PropTypes from 'prop-types';

const Counter = ({ index, score, changeScore }) => {
	return (
		<div className='counter'>
			<button
				className='counter-action decrement'
				onClick={() => changeScore(index, -1)}
			>
				{' '}
				-{' '}
			</button>
			<span className='counter-score'>{score}</span>
			<button
				className='counter-action increment'
				onClick={() => changeScore(index, 1)}
			>
				{' '}
				+{' '}
			</button>
		</div>
	);
};

Counter.propTypes = {
	index: PropTypes.number,
	score: PropTypes.number,
	changeScore: PropTypes.func,
};

export default Counter;
