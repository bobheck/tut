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

// const user = {
//     name: 'Bob Heck',
//     age: 54,
//     city: 'Midlothian',
//     state: 'TX'
// }

// function checkString (val) {
//     if(val.length > 0)
//     {
//         return val;
//     }
//     else
//     {
//         return 'Unknown';
//     }
// }

// function getValElem(val, title) {
//     if(val)
//     {
//         return <p>{title}: {val}</p>;
//     }
//     else
//     {
//         return undefined;
//     }
// }

// const templateTwo = (
//     <div>
//         <h1>{(user.name ? user.name : 'Anonymous' ).toUpperCase()}</h1>
//         {user.age && user.age >= 18 && <p>Age: {user.age}</p>}
//         {getValElem(user.city, 'City')}
//         {getValElem(user.state, 'State')}
//     </div>
// );

var count = 0;

var addOne = function addOne() {
    count++;
    renderCounterApp();
};

var minusOne = function minusOne() {
    count--;
    renderCounterApp();
};

var reset = function reset() {
    count = 0;
    renderCounterApp();
};

var appRoot = document.getElementById('app');

var renderCounterApp = function renderCounterApp() {
    var templateTwo = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Count: ',
            count
        ),
        React.createElement(
            'button',
            { onClick: addOne },
            '+1'
        ),
        React.createElement(
            'button',
            { onClick: minusOne },
            '-1'
        ),
        React.createElement(
            'button',
            { onClick: reset },
            'Reset'
        )
    );

    ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();

// ^^^^^
// Challenge
// make a "-1" button
// set up minusOne function
// log "minusOne" each time clicked
// make reset button, log reset when clicked


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
