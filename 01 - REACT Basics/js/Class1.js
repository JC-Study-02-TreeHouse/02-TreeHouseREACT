// First Example - Create Element
/*
const title = React.createElement(
  'h1',
  { id: 'main-title', title: 'This is a title.' },
  'My First React Element!'
);
console.log(title)
*/

// Second Example - Render an Element
/*
const title = React.createElement(
  'h1',
  { id: 'main-title', title: 'This is a title' },
  'My First React Element!'
);

const desc = React.createElement(
  'p',
  null,
  'I just learned how to create a React node and render it into the DOM.'
);

const header = React.createElement(
  'header',
  null,
  title,
  desc
);

ReactDOM.render(
  header,
  document.getElementById('root')
);
*/

// Third Example - JSX
/*
const title = <h1>My First React Element!</h1>;
const desc = (
	<p>I just learned how to create a React node and render it into the DOM.</p>
);

const header = React.createElement('header', null, title, desc);

ReactDOM.render(header, document.getElementById('root'));
*/

// Four Example - Embed JavaScript Expressions in JSX
const desc =
	'I just learned how to create a React node and render it into the DOM.';
const myTitleID = 'main-title';
const name = 'Guil';

const header = (
	<header>
		<h1 id={myTitleID}>{name}'s First React Element!</h1>
		<p className='main-desc'>{desc}</p>
	</header>
);

ReactDOM.render(header, document.getElementById('root'));
