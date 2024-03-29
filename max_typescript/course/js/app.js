// string
let myName = 'Bob';
// typescript automatically infers the type of variable myName to string
// this creates an error
// myName = 9;
// number (no distinction between int, float, etc.)
let myAge = 55;
// boolean
let hasHobbies = true;
// explicitly assigning types
// this creates a type 'any', no error
let myRealAge;
myRealAge = 56;
myRealAge = '57';
// explicit
let myRealAge2;
myRealAge2 = 56;
// array
let hobbies = ["Cooking", "Computers"];
let hobbies2 = ["Cooking", "Computers", 111];
console.log(hobbies[0]);
console.log(hobbies2[2]);
// tuples
let address = ["Superstreet", 99, 76065];
console.log(address);
// enums
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Blue"] = 1] = "Blue";
    Color[Color["Green"] = 111] = "Green";
    Color[Color["Yellow"] = 112] = "Yellow";
})(Color || (Color = {}));
let myColor = Color.Yellow;
console.log(myColor);
// any
let car = "BMW";
console.log(car);
car = { brand: "BMW", series: 3 };
console.log(car);
// functions
function returnMyName() {
    return myName;
}
console.log(returnMyName());
// void
function sayHello() {
    console.log("Hello!");
}
sayHello();
// argument types
function multiply(v1, v2) {
    return v1 * v2;
}
console.log(multiply(5, 9));
// functions are types
let myMultiply;
myMultiply = sayHello;
myMultiply();
myMultiply = multiply;
console.log(myMultiply(4, 6));
let myMultiply2;
myMultiply2 = multiply;
console.log(myMultiply2(4, 7));
// objects
// typescript infers the types and names of the properties 
// of an object when a new object is created without explicit types
let userData = {
    name: "Bob",
    age: 56
};
// object with explicit types
let userData2 = {
    name: "Bob",
    age: 56
};
// complex object
let complex = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
console.log(complex.data);
console.log(complex.output(true));
let complex2 = {
    data: [100, 7.99, 12],
    output: function (all) {
        return this.data;
    }
};
console.log(complex2.data);
console.log(complex2.output(true));
// union types
let myRealRealAge = 27;
myRealRealAge = "27";
// check types
let finalValue = "A string";
if (typeof finalValue == "string") {
    console.log("finalValue is a string");
}
console.log("type of finalValue is " + typeof finalValue);
// never type
function neverReturns() {
    throw new Error('an error');
}
// nullable types
let canBeNull = 12;
console.log(canBeNull);
canBeNull = null;
console.log(canBeNull);
let canAlsoBeNull;
console.log(canAlsoBeNull);
let canThisBeAny = null;
console.log("type of canThisBeAny is " + typeof canThisBeAny);
console.log(canThisBeAny);
canThisBeAny = 12;
console.log("type of canThisBeAny is " + typeof canThisBeAny);
console.log(canThisBeAny);
