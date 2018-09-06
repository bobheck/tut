
class Counter extends React.Component {
    constructor (props) {
        super(props);
        this.handlePlusOne = this.handlePlusOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: props.count
        };
    }
    
    handlePlusOne() {
        this.setState((prevState) => {
            return {
               count: prevState.count + 1
            }
          }); 
    }

    handleMinusOne() {
        this.setState((prevState) => {
            return {
               count: prevState.count - 1
            }
          }); 
    }

    handleReset() {
        this.setState(() => {
            return {
               count: 0
            }
          }); 
    }

    render() {
            return (
                <div>
                    <h1>Count: {this.state.count} </h1>
                    <button onClick={this.handlePlusOne} >+1</button>&nbsp; 
                    <button onClick={this.handleMinusOne}>-1</button>&nbsp;
                    <button onClick={this.handleReset}>Reset</button>
                </div>
            );
    }
}

Counter.defaultProps = {
    count: 0
};

ReactDOM.render(<Counter count={23} />, document.getElementById('app'));

// let count = 0;

// const addOne = () => {
//     count++;
//     renderCounterApp();
// };

// const minusOne = () => {
//     count--;
//     renderCounterApp();
// };

// const reset = () => {
//     count = 0;
//     renderCounterApp();
// };

// const appRoot = document.getElementById("app");

// const renderCounterApp = () => {
//     const templateTwo = (
//         <div>
//             <h1>
//                 Count: {count}
//             </h1>
//             < button onClick={addOne}>
//                 +1
//             </button>
//             < button onClick={minusOne}>
//                 -1
//             </button>
//             < button onClick={reset}>
//                 Reset
//             </button>
//         </div>
//     );

//     ReactDOM.render(templateTwo, appRoot);
// };

// renderCounterApp();

// // ^^^^^ Challenge make a "-1" button set up minusOne function log "minusOne"
// // each time clicked make reset button, log reset when clicked Challenge 1:
// // 1. Create your own templateTwo var JSX expression
// // 2. div
// // 3. H1 -> Your Name
// // 4. p -> Age: age
// // 5. p -> Location:
// // 6. Render templateTwo instead of template Challenge 2:
// // 1. Create app object title/subtitle
// // 2. Use title/Subtitle in the template
// // 3. Render template Challenge 3:
// // 1. render only the subtitle (and p tag) if subtitle exists
// // 2. render new p tag - if options.length > 0 "Here are your options" "No
// // Options"




// // const user = {     name: 'Bob Heck',     age: 54,     city: 'Midlothian',
// // state: 'TX' } function checkString (val) {     if(val.length > 0)     {
// //   return val;     }     else     {         return 'Unknown';     } } function
// // getValElem(val, title) {     if(val)     {         return <p>{title}:
// // {val}</p>;     }     else     {         return undefined;     } } const
// // templateTwo = (     <div>         <h1>{(user.name ? user.name : 'Anonymous'
// // ).toUpperCase()}</h1>         {user.age && user.age >= 18 && <p>Age:
// // {user.age}</p>}         {getValElem(user.city, 'City')}
// // {getValElem(user.state, 'State')}     </div> );