// es5 way
function getMessage() {
    const year = new Date().getFullYear();

    return "The year is " + year;
}

console.log(getMessage());

// es6 way using template string
function getMessage6() {
    const year6 = new Date().getFullYear();

    return `The year is ${year6}`;
}

 
console.log(getMessage6());