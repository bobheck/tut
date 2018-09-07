


// https://reactjs.org/docs/state-and-lifecycle.html

// https://reactjs.org/docs/react-component.html


class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options: props.options
        };
    }

    componentDidMount() {
        
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if(options) {
                this.setState(() => ({ options } )); 
            }
        } catch (e) {
            console.log(e);
            // do nothing
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }

    componentWillUnmount()
    {
        console.log("Component Indecision will unmount");
    }

    handleRemoveAll() {
        this.setState(() => ({ options: [] }));
    }

    handleAddOption(option)
    {
        if(!option) {
            return 'Enter valid value to add item';
        } else if (this.state.options.indexOf(option) > -1) {
            return `Option ${option} already exists`;
        }
        
        this.setState((prevState) => ( {options: prevState.options.concat(option)}));
    }

    handleDeleteOption(optionToDelete) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToDelete !== option)
        }));
    }

    handlePick() {
        const rand = Math.floor(Math.random() * this.state.options.length);
        alert(this.state.options[rand]);
    }
    
    render() {
         const subtitle = 'Put your life in the hands of a computer';
        
        return (
            <div>
                <Header 
                    subtitle={subtitle} />
                <Action 
                    hasOptions={this.state.options.length > 0} 
                    handlePick={this.handlePick} />
                <Options 
                    options={this.state.options} 
                    handleRemoveAll={this.handleRemoveAll}
                    handleDeleteOption={this.handleDeleteOption}
                    />
                <AddOption 
                    handleAddOption={this.handleAddOption}
                    />
            </div>
        );
    }
}

IndecisionApp.defaultProps = {
    options: []
};

const Header = (props) => {
    return ( 
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h4>{props.subtitle}</h4>}
        </div>
    );
}

Header.defaultProps = {
    title: 'Indecision'
};

const Option = (props) => {
    return (
        <div>
            {props.optionText}
            <button 
                onClick={(e) => {
                    props.handleDeleteOption(props.optionText) }}
                >Remove
            </button>
        </div>
    );
}

const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleRemoveAll}>Remove All Options</button>
            {props.options.length === 0 && <p>Please add an option to get</p>}
            {
                props.options.map((o) => (
                    <Option 
                        key={o} 
                        optionText={o}
                        handleDeleteOption={props.handleDeleteOption}
                    />
                ))
            }
        </div>
    );
}

const Action = (props) => {
    return  (
        <div>
            <button 
                disabled={!props.hasOptions}
                onClick={props.handlePick}>
                What should I do?
            </button>
        </div>
    );
};


class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        };
    }

    handleAddOption(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);      
        this.setState(() => ( { error } ));
        if(!error)
        {
            e.target.elements.option.value = '';    
        }
    }
  
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
            </div>
        );
    }
}



ReactDOM.render(<IndecisionApp />, document.getElementById('app'));