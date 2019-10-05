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
