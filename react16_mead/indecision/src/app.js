console.log("App.js is running!");

// to use babel babel src/app.js --out-file=public/scripts/app.js --presets=env,react

const titleObj = {
    title: "Indecision App",
    subTitle: "Put your life into the hands of a computer",
    //subTitle: '',
    options: ["One", "Two"]
};

const onFormSubmit = (e) => {
    e.preventDefault();
    
    const option = e.target.elements.option.value;
   
    if(option)
    {
        console.log(option);
    }
};

// JSX - JavaScript XML
const template = (
    <div>
        < h1 >
            {titleObj.title}
        </h1>
        {titleObj.subTitle && < h3 > {
            titleObj.subTitle
        } </h3>}
        <p>
            {titleObj.options.length > 0
                ? "Here are your options"
                : "No options"}
        </p>
        <ol>
            <li >
                Item one
            </li>
            <li>
                Item two
            </li>
        </ol>
        <form onSubmit={onFormSubmit}>
            <input type="text" name="option"/>
            <button>Add Option</button>
        </form>

    </div>
);

const appRoot = document.getElementById("app");
ReactDOM.render(template, appRoot);


