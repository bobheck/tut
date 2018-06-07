// arguments object - no longer bound with arrow functions

// es5

const add = function (a, b) {
    console.log(arguments);
    return a + b;
}

// es6
const add2 = (a, b) => {
     // error in es6    console.log(arguments);
    return a + b;
}


console.log(add(55,12,1001));

console.log(add2(55,14,1001));


// this keyword - no longer bound in es6 arrow functions
// es5
const user = {
    name: 'Bob',
    cities: ['Midlothian', 'Midland', 'Pensacola', 'Clearwater'],
    printPlacesLived: function () {
        const that = this;
        this.cities.forEach(function (c) {
           console.log(that.name + ' has lived in ' + c);         
        })
    }
};

user.printPlacesLived();

// es6 way
const user2 = {
    name: 'Bobby',
    cities: ['Midlothian', 'Midland', 'Pensacola', 'Clearwater'],
    printPlacesLived: function () {
        this.cities.forEach((c) => {
           console.log(this.name + ' has lived in ' + c);         
        })
    }
};
user2.printPlacesLived();

// es6 method syntax
const user3 = {
    name: 'Robert',
    cities: ['Midlothian', 'Midland', 'Pensacola', 'Clearwater'],
    printPlacesLived() {
        this.cities.forEach((c) => {
           console.log(this.name + ' has lived in ' + c);         
        })
    }
};
user3.printPlacesLived();


// es6 method syntax, using map
const user4 = {
    name: 'Angie',
    cities: ['Midlothian', 'Midland', 'Pensacola', 'Clearwater'],
    printPlacesLived() {
        return this.cities.map((c) => this.name + ' has lived in ' + c);
    }
};
console.log(user4.printPlacesLived());

// Challenge
// use map with arrow function

const multiplier = {
    // numbers array
    // single number, multiplyBy
    // multiply method
    // multiply all numbers in array by single number and return new array

    numbers: [2,3,4,5,6,7,8,9,10],
    multiplyBy: 10,
    multiply() {
        return this.numbers.map((n) => n * this.multiplyBy);
    }
};

console.log(multiplier.multiply());