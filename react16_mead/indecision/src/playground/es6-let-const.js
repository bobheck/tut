var nameVar = 'Bob';
var nameVar = 'Brian';
console.log('nameVar', nameVar)

let  nameLet = 'Bobby';
nameLet = 'Angie'
console.log('nameLet', nameLet)

const nameConst = 'BobConst';
console.log('nameConst', nameConst)

// var is function scoped

function getPetName() {
    var petName = 'Hal';
    return petName;
}

getPetName();
//console.log(petName);  //error

// let and const are also function scoped

// Block scoping
// var is not block scoped but let and const are
const fullName = 'Bob Heck';
let firstName;

if(fullName) {
    // var firstName = fullName.split(' ')[0];
    //let firstName = fullName.split(' ')[0];
    firstName = fullName.split(' ')[0];
    console.log('first name', firstName);
}

// if we define firstName inside of the if statement, then
// this is OK with var
// this is NOT OK with const or let, since they are block scoped and
// would be available only in the if statement where they were defined
// ok if defined outside of if statement though
console.log('first name2', firstName);

