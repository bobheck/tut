console.log("app.js is running5");

// JSX - JavaScript XML
//var template = <p>This is JSX from app.js</p>;
var appRoot = document.getElementById("appMain");

var template = React.createElement(
    "h1",
    {id: "h1Id"},
    "Created Element Bob"
)

ReactDOM.render(template, appRoot);