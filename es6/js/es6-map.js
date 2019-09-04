// map - by far most used helper

var numbers = [1, 2, 3];

var doubledFor = [];

// doublednumbers using for loop
for (var i = 0; i < numbers.length; i++) {
    doubledFor.push(numbers[i] * 2);
}

// doublednumbers using Map
var doubledMap = numbers.map(function (number) {
    return number * 2;
});

console.log(doubledMap);
console.log(doubledFor);


// pluck out properties from object array
var cars = [
    { model: 'Ford', price: 'CHEAP' },
    { model: 'Mercedes', price: 'expensive' }
];

var prices = cars.map(function(car) {
   return car.price;
});

console.log(prices);


// assignment 1
// Plucking Values
// Using map, create a new array that contains the 'height' property
// of each object.  Assign this new array to the variable 'heights'.
// Don't forget to use the 'return' keyword in the function!

// assignment 1 solution
var images = [
    { height: '34px', width: '39px' },
    { height: '54px', width: '19px' },
    { height: '83px', width: '75px' },
];

var heights = images.map(function(image) {
    return image.height;
});

console.log(heights);


// assignment 2
//Calculating Values with Map
//Using map, create a new array that contains the
// distance / time value from each trip.  In other words,
// the new array should contain the (distance / time) value.
// Assign the result to the variable 'speeds'.

// solution
var trips = [
    { distance: 34, time: 10 },
    { distance: 90, time: 50 },
    { distance: 59, time: 25 }
];

var speeds = trips.map(function(trip) {
    return (trip.distance / trip.time);
});

console.log(speeds);

// assignment 3
// Really Hard - Implementing 'Pluck'
// This is a hard one!
// Implement a 'pluck' function.  Pluck should accept an
// array and a string representing a property name and
// return an  array containing that property from each object.

// solution
function pluck(array, property) {
    return array.map(function (arritem) {
        return arritem[property];
    });
}
