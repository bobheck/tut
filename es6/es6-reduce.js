var numbers = [ 10,20,30];
var sum = 0;

var n = numbers.reduce(function(sum, number){
    return sum + number;
}, 1100);

console.log(n);

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