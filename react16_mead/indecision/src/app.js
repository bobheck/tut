console.log('App.js is running!');

// JSX - JavaScript XML
var template = (
    <div>
        <h1>Indecision App</h1>
        <p>This is some info</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
);

// Challenge 1:
// 1. Create your own templateTwo var JSX expression
// 2. div
// 3. H1 -> Your Name
// 4. p -> Age: age
// 5. p -> Location:
// 6. Render templateTwo instead of template

var templateTwo = (
    <div>
        <h1>Bob Heck</h1>
        <p>Age: 54</p>
        <p>Location: Midlothian TX</p>
    </div>
);

var appRoot = document.getElementById('app');
ReactDOM.render(templateTwo, appRoot);