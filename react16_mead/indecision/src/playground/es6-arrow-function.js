// es5 functions
function square(x) {
    return x * x;
};

// es6
const squareArrow = (x) => {
    return x * x;
}

// es6 concise, when returning a single expression
const squareArrowConcise = (x) => x * x;


console.log(square(4));

console.log(squareArrow(8));

console.log(squareArrowConcise(12));

// challenge - use arrow functions
// get first name
// take in full name and return first name

const getFirstName1 = (n) => {
    return n.split(' ')[0];
}

const getFirstName2 = (n) => n.split(' ')[0];

console.log(getFirstName1("Bob Heck"));
console.log(getFirstName2("Angie Heck"));