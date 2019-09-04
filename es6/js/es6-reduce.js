var numbers = [ 10,20,30];
var sumViaForLoop = 0;
var sumViaReduce = 0;

for(var i = 0; i < numbers.length; i++) {
    sumViaForLoop += numbers[i];
}
console.log('sumViaForLoop: ', sumViaForLoop);

var iterateVal = 0;
sumViaReduce = numbers.reduce(function(iterateVal, number){
    return iterateVal + number;
}, 100);

console.log('sumViaReduce: ', sumViaReduce);

// ---

var primaryColors = [
    { color: 'red' },
    { color: 'yellow' },
    { color: 'blue' }
];

var p = primaryColors.reduce(function(accum, primaryColor) {
    accum.push(primaryColor.color);
    return accum;
}, []);

console.log(p);

// practical example of reduce
function balancedParens(string) {
    return !string.split("").reduce(function(accum, char){
        if(accum < 0 ) { return accum; }
        if(char === "(") { return ++accum; }
        if(char === ")") { return --accum; }
        return accum;
    }, 0);
};

var b = balancedParens(")(()");

console.log(b);