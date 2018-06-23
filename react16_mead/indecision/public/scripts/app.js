"use strict";

console.log("App.js is running!");

// to use babel babel src/app.js --out-file=public/scripts/app.js --presets=env,react

var titleObj = {
    title: "Indecision App",
    subTitle: "Put your life into the hands of a computer",
    //subTitle: '',
    options: ["One", "Two"]
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();

    var option = e.target.elements.option.value;

    if (option) {
        console.log(option);
    }
};

// JSX - JavaScript XML
var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        titleObj.title
    ),
    titleObj.subTitle && React.createElement(
        "h3",
        null,
        " ",
        titleObj.subTitle,
        " "
    ),
    React.createElement(
        "p",
        null,
        titleObj.options.length > 0 ? "Here are your options" : "No options"
    ),
    React.createElement(
        "ol",
        null,
        React.createElement(
            "li",
            null,
            "Item one"
        ),
        React.createElement(
            "li",
            null,
            "Item two"
        )
    ),
    React.createElement(
        "form",
        { onSubmit: onFormSubmit },
        React.createElement("input", { type: "text", name: "option" }),
        React.createElement(
            "button",
            null,
            "Add Option"
        )
    )
);

var appRoot = document.getElementById("app");
ReactDOM.render(template, appRoot);
