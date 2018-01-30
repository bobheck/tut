
// reg way
const add = function (a, b) {
    return a + b;
}
console.log(add(1,2));

// fat arrow function way
const adda = (a, b) => {
    return a + b;
}
console.log(adda(4,2));

// abbreviated fat arrow for single expression 
// only when one expression is in function body
const addb = (a, b) =>  a + b;
console.log(addb(4,5));

// single argument, can omit parens 
const dbl = number => 2 * number;
console.log(dbl(32));

// function with no arguments
const hlo = () => "hello";
console.log(hlo());

// refactoring with fat arrow functions
// reg way
const numbers = [1,2,3];
const dnumbers = numbers.map(function(number) {
     return 2 * number;
});
console.log(dnumbers);

// refactored
const dnumbers2 = numbers.map(number => 2 * number);
console.log(dnumbers2);


// IMPORTANT
// this word unambiguity

// old way -- this does not work because this is gone out of scope
const team = {
    members: ['Jane', 'Bill'],
    teamName: 'Super Squad',
    teamSummary: function() {
        return this.members.map(function(member) {
            return `${member} is on team ${this.teamName}`;
        }); 
    }
};

console.log(team.teamSummary());

// fat arrow functions make use of "Lexical this"
// fat arrow way, this works
const team2 = {
    members: ['Jane', 'Bill'],
    teamName: 'Super Squad',
    teamSummary: function() {
        return this.members.map((member) => {      // using fat arrow here makes this === team
            return `${member} is on team ${this.teamName}`;
        }); 
    }
};

console.log(team2.teamSummary());




