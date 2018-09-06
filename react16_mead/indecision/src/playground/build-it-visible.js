class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleShowHide = this.handleShowHide.bind(this);
        this.state = {
            visible: false
        }
    }

    handleShowHide() {
        this.setState((prevState) => {
           return {
               visible: !prevState.visible
           }
        });
    }

    render() {
        const title = "Build It Visibility Toggle w/Components"
        return (
            <div>
                <Title title={title} />
                <ButtonRow visible={this.state.visible} handleShowHide={this.handleShowHide} />
                <Details visible={this.state.visible} />
            </div>
        );
    }
}

class Title extends React.Component {
    render() {
        return (
        <div>
            <h2>{this.props.title}</h2>
        </div>
        );
    }
}

class ButtonRow extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <button onClick={this.props.handleShowHide}>{this.props.visible ? "Hide Details" : "Show Details"}</button>
            </div>
        )
    }
}

class Details extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div hidden={!this.props.visible}>
            These are the details.
            </div>
        )
    }

}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

// const app = {
//     title: "Visibility Toggle",
//     detailsVisible: false
// }

// const toggleVisible = () => {
//     app.detailsVisible = !app.detailsVisible;
//     renderForm();
// }

// const appRoot = document.getElementById("app");

// var renderForm = function renderForm() {
//     var templateJsx = <div>
//         <h1 id="ttl">{app.title}</h1>
//         <p>
//             <button onClick={toggleVisible}>{app.detailsVisible ? "Hide Details" : "Show Details"}</button>
//         </p>
//         <div id="details" hidden={!app.detailsVisible}>
//         Here are the details
//         </div>
//     </div>

//     ReactDOM.render(templateJsx, appRoot);
// };

// renderForm();