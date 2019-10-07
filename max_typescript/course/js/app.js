"use strict";
// string
var myName = 'Bob';
// typescript automatically infers the type of variable myName to string
// this creates an error
// myName = 9;
// number (no distinction between int, float, etc.)
var myAge = 55;
// boolean
var hasHobbies = true;
// explicitly assigning types
// this creates a type 'any', no error
var myRealAge;
myRealAge = 56;
myRealAge = '57';
// explicit
var myRealAge2;
myRealAge2 = 56;
// array
var hobbies = ["Cooking", "Computers"];
var hobbies2 = ["Cooking", "Computers", 111];
console.log(hobbies[0]);
console.log(hobbies2[2]);
// tuples
var address = ["Superstreet", 99, 76065];
console.log(address);
// enums
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Blue"] = 1] = "Blue";
    Color[Color["Green"] = 111] = "Green";
    Color[Color["Yellow"] = 112] = "Yellow";
})(Color || (Color = {}));
var myColor = Color.Yellow;
console.log(myColor);
// any
var car = "BMW";
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
var myMultiply;
myMultiply = sayHello;
myMultiply();
myMultiply = multiply;
console.log(myMultiply(4, 6));
var myMultiply2;
myMultiply2 = multiply;
console.log(myMultiply2(4, 7));
// objects
// typescript infers the types and names of the properties 
// of an object when a new object is created without explicit types
var userData = {
    name: "Bob",
    age: 56
};
// object with explicit types
var userData2 = {
    name: "Bob",
    age: 56
};
// complex object
var complex = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
console.log(complex.data);
console.log(complex.output(true));
var complex2 = {
    data: [100, 7.99, 12],
    output: function (all) {
        return this.data;
    }
};
console.log(complex2.data);
console.log(complex2.output(true));
// union types
var myRealRealAge = 27;
myRealRealAge = "27";
// check types
var finalValue = "A string";
if (typeof finalValue == "string") {
    console.log("finalValue is a string");
}
console.log("type of finalValue is " + typeof finalValue);
// never type
function neverReturns() {
    throw new Error('an error');
}
// nullable types
var canBeNull = 12;
console.log(canBeNull);
canBeNull = null;
console.log(canBeNull);
var canAlsoBeNull;
console.log(canAlsoBeNull);
var canThisBeAny = null;
console.log("type of canThisBeAny is " + typeof canThisBeAny);
console.log(canThisBeAny);
canThisBeAny = 12;
console.log("type of canThisBeAny is " + typeof canThisBeAny);
console.log(canThisBeAny);
