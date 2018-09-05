
{/* BuildIt! One */}

const app = {
    title: "Visibility Toggle",
    detailsVisible: false
}

const toggleVisible = () => {
    app.detailsVisible = !app.detailsVisible;
    renderForm();
}

const appRoot = document.getElementById("app");

var renderForm = function renderForm() {
    var templateJsx = <div>
        <h1 id="ttl">{app.title}</h1>
        <p>
            <button onClick={toggleVisible}>{app.detailsVisible ? "Hide Details" : "Show Details"}</button>
        </p>
        <div id="details" hidden={!app.detailsVisible}>
        Here are the details
        </div>
    </div>

    ReactDOM.render(templateJsx, appRoot);
};

renderForm();