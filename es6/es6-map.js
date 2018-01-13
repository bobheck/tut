// map

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


// filter out properties from object array
var cars = [
    { model: 'Ford', price: 'CHEAP' },
    { model: 'Mercedes', price: 'expensive' }
];

var prices = cars.map(function(car) {
   return car.price;
});

console.log(prices);



