
class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.state = {
            options: []
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
        const title= 'Indecision';
        const subtitle = 'Put your life in the hands of a computer';
        
        return (
            <div>
                <Header 
                    title={title} 
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

class Header extends React.Component {
    render() {

        return ( 
            <div>
                <h1>{this.props.title}</h1>
                <h3>{this.props.subtitle}</h3>
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                {this.props.optionText}
            </div>
        );
    }
}

class Action extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return  (
            <div>
                <button 
                disabled={!this.props.hasOptions}
                onClick={this.props.handlePick}>What should I do?</button>
            </div>
        );
    }
}

class Options extends React.Component {
    constructor(props) {
        super(props);
    }
  
    render() {
        return (
            <div>
                <button onClick={this.props.handleRemoveAll}>Remove All Options</button>
                {
                    this.props.options.map((o) => <Option key={o} optionText={o}/>)
                }
            </div>
        );
    }
}

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

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));