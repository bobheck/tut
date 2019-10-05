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
let myRealAge2: number;
myRealAge2 = 56;

// array
let hobbies = ["Cooking", "Computers"];
let hobbies2:any[] = ["Cooking", "Computers", 111];
console.log(hobbies[0]);
console.log(hobbies2[2]);

// tuples
let address:[string, number, number] = ["Superstreet", 99, 76065];
console.log(address);

// enums
