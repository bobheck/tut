'use strict';

console.log('App.js is running!');

// JSX - JavaScript XML
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Indecision App'
    ),
    React.createElement(
        'p',
        null,
        'This is some info'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item one'
        ),
        React.createElement(
            'li',
            null,
            'Item two'
        )
    )
);

// Challenge 1:
// 1. Create your own templateTwo var JSX expression
// 2. div
// 3. H1 -> Your Name
// 4. p -> Age: age
// 5. p -> Location:
// 6. Render templateTwo instead of template

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Bob Heck'
    ),
    React.createElement(
        'p',
        null,
        'Age: 54'
    ),
    React.createElement(
        'p',
        null,
        'Location: Midlothian TX'
    )
);

var appRoot = document.getElementById('app');
ReactDOM.render(templateTwo, appRoot);
