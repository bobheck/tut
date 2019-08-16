// rest and spread operators

function addNumbers1 (numbers) {
    return numbers.reduce((sum, number) => {
        return sum + number;
    }, 0);
}

function addNumbers2 (...numbers) {
    return numbers.reduce((sum, number) => {
        return sum + number;
    }, 0);
}


let add1 = addNumbers1([1,2,3,4,5]);
console.log('add1: ', add1);

// add many arguments not in an array
let add2 = addNumbers2(1,2,3,4,5,6,10);
console.log('add2: ', add2);

//---------------------------------------

const defaultColors = ['red', 'green'];
const userFavColors = ['orange', 'purple'];
const mandatoryColors = ['blue', 'black','white'];

// old way
let arr1 = defaultColors.concat(userFavColors);
console.log('arr1: ', arr1);

// new way
let arr2 = [...defaultColors, ...userFavColors];
console.log('arr2: ', arr2);


let arr3 = ['yellow', ...mandatoryColors, ...defaultColors, ...userFavColors];
console.log('arr3: ', arr3);

//---------------------------------------

function validateShoppingList(...items) {
    if(items.indexOf('milk') < 0) {
        return ['milk', ...items];
    }
    return items;
}

let vallist =  validateShoppingList('oranges', 'bread', 'eggs');
console.log('vallist: ', vallist);
