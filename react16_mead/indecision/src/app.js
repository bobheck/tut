
class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.state = {
            options: props.options
        };
    }
       
    handleRemoveAll() {
        this.setState(() => {
            return {
                options: []
            };
        });
    }

    handleAddOption(option)
    {
        if(!option) {
            return 'Enter valid value to add item';
        } else if (this.state.options.indexOf(option) > -1) {
            return `Option ${option} already exists`;
        }
        
        this.setState((prevState) => {
            return {
                options: prevState.options.concat(option)    
            }
        });
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
        </div>
    );
}

const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleRemoveAll}>Remove All Options</button>
            {
                props.options.map((o) => <Option key={o} optionText={o}/>)
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
    
        this.setState(() => {
            return { error };
        });
        e.target.elements.option.value = '';    
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

// const User = (props) => {
//     return (
//         <div>
//             <p>Name: {props.name} </p>
//             <p>Age: {props.age} </p>
//         </div>
//     );
//  };


ReactDOM.render(<IndecisionApp />, document.getElementById('app'));