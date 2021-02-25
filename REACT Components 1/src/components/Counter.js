// Lesson 3
/*
import React, { Component } from 'react';

class Counter extends Component {
  state = { 
    score: 0 
  };
  
  incrementScore = () => {
    this.setState( prevState => ({
      score: prevState.score + 1
    }));
  }

  decrementScore = () => {
    this.setState( prevState => ({
      score: prevState.score - 1
    }));
  }

  render() {
    return (
      <div className="counter">
        <button className="counter-action decrement" onClick={this.decrementScore}> - </button>
        <span className="counter-score">{ this.state.score }</span>
        <button className="counter-action increment" onClick={this.incrementScore}> + </button>
      </div>
    );
  }
}

export default Counter;
*/
// Lesson 4
/*
import React from 'react';

const Counter = (props) => {
	// incrementScore = () => {
	//   this.setState( prevState => ({
	//     score: prevState.score + 1
	//   }));
	// }

	// decrementScore = () => {
	//   this.setState( prevState => ({
	//     score: prevState.score - 1
	//   }));
	// }

	return (
		<div className='counter'>
			<button className='counter-action decrement'> - </button>
			<span className='counter-score'>{props.score}</span>
			<button className='counter-action increment'> + </button>
		</div>
	);
};

export default Counter;
*/
// Lesson 5
/*
import React from 'react';

const Counter = (props) => {
	return (
		<div className='counter'>
			<button
				className='counter-action decrement'
				onClick={() => props.changeScore(-1)}
			>
				{' '}
				-{' '}
			</button>
			<span className='counter-score'>{props.score}</span>
			<button
				className='counter-action increment'
				onClick={() => props.changeScore(1)}
			>
				{' '}
				+{' '}
			</button>
		</div>
	);
};

export default Counter;
*/
// Lesson 6 7 8 9 10

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
