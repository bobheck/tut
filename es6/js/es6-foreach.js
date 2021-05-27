// create an array of numbers
var numbers = [1,2,3,4,5];

// create a variable to hold the sum
var sum = 0;
var sum2 = 0;

// loop over the array, incrementing the sum variable
numbers.forEach(function(number) {
    sum += number;
});

// the function in the forEach does not have to be an anonymous function
// note how the function itself declares the args and they are not passed in forEach
function adder(number) {
    sum2 += number;
}

numbers.forEach(adder);

// print the sum variable
console.log(sum);
console.log(sum2);