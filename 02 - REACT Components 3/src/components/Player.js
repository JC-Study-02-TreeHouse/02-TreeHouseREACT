// Lesson 1
/*
import React, { PureComponent } from 'react';
import Counter from './Counter';

class Player extends PureComponent {
	render() {
		console.log(this.props.name + ' rendered');
		return (
			<div className='player'>
				<span className='player-name'>
					<button
						className='remove-player'
						onClick={() => this.props.removePlayer(this.props.id)}
					>
						✖
					</button>
					{this.props.name}
				</span>

				<Counter
					score={this.props.score}
					index={this.props.index}
					changeScore={this.props.changeScore}
				/>
			</div>
		);
	}
}

export default Player;

// Lesson 2 3 4 5

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Counter from './Counter';

class Player extends PureComponent {
	static propTypes = {
		changeScore: PropTypes.func.isRequired,
		removePlayer: PropTypes.func.isRequired,
		name: PropTypes.string.isRequired,
		score: PropTypes.number.isRequired,
		id: PropTypes.number.isRequired,
		index: PropTypes.number.isRequired,
	};

	render() {
		const { name, id, score, index, removePlayer, changeScore } = this.props;

		return (
			<div className='player'>
				<span className='player-name'>
					<button className='remove-player' onClick={() => removePlayer(id)}>
						✖
					</button>
					{name}
				</span>

				<Counter score={score} index={index} changeScore={changeScore} />
			</div>
		);
	}
}

export default Player;
*/
// Lesson 6

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Counter from './Counter';
import Icon from './Icon';

class Player extends PureComponent {
	static propTypes = {
		changeScore: PropTypes.func.isRequired,
		removePlayer: PropTypes.func.isRequired,
		name: PropTypes.string.isRequired,
		score: PropTypes.number.isRequired,
		id: PropTypes.number.isRequired,
		index: PropTypes.number.isRequired,
	};

	render() {
		const { name, id, score, index, removePlayer, changeScore } = this.props;

		return (
			<div className='player'>
				<span className='player-name'>
					<button className='remove-player' onClick={() => removePlayer(id)}>
						✖
					</button>

					<Icon isHighScore={this.props.isHighScore} />
					{name}
				</span>

				<Counter score={score} index={index} changeScore={changeScore} />
			</div>
		);
	}
}

export default Player;
