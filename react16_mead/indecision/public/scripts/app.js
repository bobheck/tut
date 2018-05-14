'use strict';

console.log('App.js is running!');

var titleObj = {
    title: 'Indecision App',
    subTitle: 'Put your life into the hands of a computer',
    //subTitle: '',
    options: ['One', 'Two']

    // JSX - JavaScript XML
};var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        titleObj.title
    ),
    titleObj.subTitle && React.createElement(
        'h3',
        null,
        titleObj.subTitle
    ),
    React.createElement(
        'p',
        null,
        titleObj.options.length > 0 ? "Here are your options" : "No options"
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

var user = {
    name: 'Bob Heck',
    age: 54,
    city: 'Midlothian',
    state: 'TX'
};

function checkString(val) {
    if (val.length > 0) {
        return val;
    } else {
        return 'Unknown';
    }
}

function getValElem(val, title) {
    if (val) {
        return React.createElement(
            'p',
            null,
            title,
            ': ',
            val
        );
    } else {
        return undefined;
    }
}

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        (user.name ? user.name : 'Anonymous').toUpperCase()
    ),
    user.age && user.age >= 18 && React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    getValElem(user.city, 'City'),
    getValElem(user.state, 'State')
);

var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);

// Challenge 1:
// 1. Create your own templateTwo var JSX expression
// 2. div
// 3. H1 -> Your Name
// 4. p -> Age: age
// 5. p -> Location:
// 6. Render templateTwo instead of template

// Challenge 2:
// 1. Create app object title/subtitle
// 2. Use title/Subtitle in the template
// 3. Render template

// Challenge 3:
// 1. render only the subtitle (and p tag) if subtitle exists
// 2. render new p tag - if options.length > 0 "Here are your options" "No Options"
