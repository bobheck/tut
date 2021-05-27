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
enum Color {
    Red,
    Blue,
    Green = 111,
    Yellow
}

let myColor: Color = Color.Yellow;
console.log(myColor);

// any
let car: any = "BMW"
console.log(car);
car = {brand: "BMW", series: 3};
console.log(car);

// functions
function returnMyName() : string {
    return myName;
}

console.log(returnMyName());

// void

function sayHello() : void {
    console.log("Hello!");
}
sayHello();

// argument types
function multiply(v1 : number, v2 : number) : number {
    return v1 * v2;
}

console.log(multiply(5,9));

// functions are types
let myMultiply;
myMultiply = sayHello;
myMultiply();
myMultiply = multiply;
console.log(myMultiply(4,6));

let myMultiply2: (val1: number, val2: number) => number;
myMultiply2 = multiply;
console.log(myMultiply2(4,7));

// objects
// typescript infers the types and names of the properties 
// of an object when a new object is created without explicit types
let userData = {
    name: "Bob",
    age: 56
};

// object with explicit types
let userData2: { name: string, age: number} = {
    name: "Bob",
    age: 56
};

// complex object
let complex: { data: number[], output: (all: boolean) => number[]} = {
    data: [100,3.99,10],

    output: function (all: boolean): number[] {
        return this.data;
    }
}

console.log(complex.data);
console.log(complex.output(true));

// type alias
type Complex = { data: number[], output: (all: boolean) => number[]};

let complex2: Complex = {
    data: [100,7.99,12],

    output: function (all: boolean): number[] {
        return this.data;
    }
}

console.log(complex2.data);
console.log(complex2.output(true));

// union types
let myRealRealAge: number | string = 27;
myRealRealAge = "27";

// check types
let finalValue = "A string";

if(typeof finalValue == "string") {
    console.log("finalValue is a string");
}

console.log("type of finalValue is " + typeof finalValue);

// never type
function neverReturns():never {
    throw new Error('an error');
}

// nullable types
let canBeNull: number | null = 12;
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


