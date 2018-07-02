"use strict";

console.log("App.js is running!");

// to use babel babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
// live-server public --watch
// https://reactjs.org/docs/events.html


var app = {
    title: "Indecision App",
    subTitle: "Put your life into the hands of a computer",
    //subTitle: '',
    options: []
};

var onFormSubmit = function onFormSubmit(e) {

    // e.preventDefault stops full page refresh
    e.preventDefault();

    var option = e.target.elements.option.value;

    // empty string is falsy
    if (option) {
        app.options.push(option);
    }

    e.target.elements.option.value = "";
    renderForm();
};

var onClear = function onClear(e) {
    e.preventDefault();
    app.options = [];
    renderForm();
};

// JSX - JavaScript XML

// important, in the form, do not reference {onFormSubmit()}, 
// which would call the function and get the return value
// we just want a reference to the function here,
// so we set it to {onFormSubmit}, sans the parens
var appRoot = document.getElementById("app");

var renderForm = function renderForm() {
    var template = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            app.title
        ),
        app.subTitle && React.createElement(
            "h3",
            null,
            " ",
            app.subTitle,
            " "
        ),
        React.createElement(
            "p",
            null,
            app.options.length > 0 ? "Here are your options" : "No options"
        ),
        React.createElement(
            "button",
            { onClick: onClear },
            "Clear All Options"
        ),
        React.createElement(
            "p",
            null,
            app.options.length
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

    ReactDOM.render(template, appRoot);
};

renderForm();
