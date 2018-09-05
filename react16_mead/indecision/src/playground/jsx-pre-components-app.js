console.log("App.js is running!");

// to use babel babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
// live-server public --watch
// https://reactjs.org/docs/events.html


const app = {
    title: "Indecision App",
    subTitle: "Put your life into the hands of a computer",
    //subTitle: '',
    options: []
};



const onFormSubmit = (e) => {
    
    // e.preventDefault stops full page refresh
    e.preventDefault();
    
    const option = e.target.elements.option.value;

    // empty string is falsy
    if(option) {
        app.options.push(option);
    }
   
    e.target.elements.option.value = "";
    renderForm();
    
};

const onClear = (e) => {
    e.preventDefault();
    app.options = [];
    renderForm();
};

// JSX - JavaScript XML

// important, in the form, do not reference {onFormSubmit()}, 
// which would call the function and get the return value
// we just want a reference to the function here,
// so we set it to {onFormSubmit}, sans the parens




const appRoot = document.getElementById("app");

const renderForm = () => {
    const template = (
        <div>
            < h1 >
                {app.title}
            </h1>
            {app.subTitle && < h3 > {
                app.subTitle
            } </h3>}
            <p>
                {app.options.length > 0
                    ? "Here are your options"
                    : "No options"}
            </p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision} >What should I do?</button>        
            <button onClick={onClear}>Clear All Options</button>
               
            <ol>
                {
                    app.options.map((opt) => {
                    return <li key={opt}>{opt}</li>;
                })
            }     
            </ol>
    
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
    
        </div>
    );

    ReactDOM.render(template, appRoot);
};

renderForm();