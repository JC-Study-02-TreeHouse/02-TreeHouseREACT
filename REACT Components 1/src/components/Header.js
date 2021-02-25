// Lesson 1 2 3 4 5 6
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

export default Header;
*/
// Lesson 7 8 9 10

import React from 'react';
import Stats from './Stats';

const Header = (props) => {
	return (
		<header>
			<Stats players={props.players} />
			<h1>{props.title}</h1>
		</header>
	);
};

export default Header;
