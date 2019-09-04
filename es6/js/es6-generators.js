// generators are the brain-benders of es6
// Definition - a generator is a function that can be entered and exited 
//              multiple times
//
//              With a generator, we can run some code, return, and then
//              re-enter the function where we left it

// syntax for generator
// alternate = function *numbers() {}
// yield keyword

function* numbers() {
    yield;
    
}

const gen = numbers();
gen.next();
gen.next();

console.log(numbers());
console.log(gen);

//---------------------------
// demonstrating use of a generator
// story - 
// 1 - i start walking to the store
// 2 - i am still walking
// 3 - i am at the store, going in with money
//  ---- (transition)
// 4 - i am in the store, i will see you 'soon'
//  ---- (transition)
// 5 - I am back out of the store, with groceries
// 6 - stop at dry cleaners
// 7 - pick up laundry
// 8 - head back home

function* shopping() {
    // happening outside of store

    // walking to store
    
    // go into store with cash
    const stuffFromStore = yield 'cash';

    const laundry = yield 'laundry';
   
    // walking back home
    return [stuffFromStore, laundry];
}

// happening in store
const gen2 = shopping();
var r = gen2.next(); // leaving house (#4)
console.log(r);

r = gen2.next('groceries'); // leaving the store with groceries
console.log(r);

r = gen2.next('clean clothes'); // getting laundry
console.log(r);

// -- why we really use generators
function* colors() {
    yield 'red';
    yield 'blue';
    yield 'green';
}

const myColors = [];
for(let color of colors()) {
    myColors.push(color);
}

console.log(myColors);

// more practical use of generators
const engTeam = {
    size: 3,
    department: 'Engineering',
    lead: 'Jill',
    manager: 'Alex',
    engineer: 'Dave'
};

function* TeamIterator(team) {
    yield team.lead;
    yield team.manager;
    yield team.engineer;
}

const names = [];
for (let name of TeamIterator(engTeam)) {
    names.push(name);
}

console.log(names);