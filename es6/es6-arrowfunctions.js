
// reg way
const add = function (a, b) {
    return a + b;
}
console.log(add(1,2));

// fat arrow function way
const adda = (a, b) => {
    return a + b;
}
console.log(adda(4,2));

// abbreviated fat arrow for single expression 
// only when one expression is in function body
const addb = (a, b) =>  a + b;
console.log(addb(4,5));

// single argument, can omit parens 
const dbl = number => 2 * number;
console.log(dbl(32));

// function with no arguments
const hlo = () => "hello";
console.log(hlo());



