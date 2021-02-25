// Lesson 1
/*
import React from 'react';
import Stats from './Stats';
import Stopwatch from './Stopwatch';

const Header = (props) => {
	return (
		<header>
			<Stats players={props.players} />
			<h1>{props.title}</h1>
			<Stopwatch />
		</header>
	);
};

export default Header;

// Lesson 2 3 4

import React from 'react';
import Stats from './Stats';
import Stopwatch from './Stopwatch';
import PropTypes from 'prop-types';

const Header = ({ players, title }) => {
	return (
		<header>
			<Stats players={players} />
			<h1>{title}</h1>
			<Stopwatch />
		</header>
	);
};

Header.propTypes = {
	title: PropTypes.string,
	players: PropTypes.arrayOf(PropTypes.object),
};

export default Header;
*/
// Lesson 5 6

import React from 'react';
import PropTypes from 'prop-types';
import Stats from './Stats';
import Stopwatch from './Stopwatch';

const Header = ({ players, title }) => {
	return (
		<header>
			<Stats players={players} />
			<h1>{title}</h1>
			<Stopwatch />
		</header>
	);
};

Header.propTypes = {
	title: PropTypes.string,
	players: PropTypes.arrayOf(PropTypes.object).isRequired,
};

Header.defaultProps = {
	title: 'Scoreboard',
};

export default Header;
