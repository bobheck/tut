// every helper

var computers = [
    { name: 'Apple', ram: 24},
    { name: 'HP', ram: 32},
    { name: 'Dell', ram: 16},
    { name: 'Acer', ram: 4}
];

var everyComputerMeetsRam = true;
var onlySomeComputersMeetRam = false;

// first use old for loop
for(var i = 0; i< computers.length; i++) {
    var computer = computers[i];

    if(computer.ram < 16) {
        everyComputerMeetsRam = false;
    } else {
      onlySomeComputersMeetRam = true;
    }
}

console.log('for | every comp: ' + everyComputerMeetsRam);
console.log('for | some comp: ' + onlySomeComputersMeetRam);

// use every helper

var ev = computers.every(function(computer) {
    return computer.ram > 16;
})

console.log('every | every comp: ' + ev);

// use some helper
var sm = computers.some(function(computer) {
    return computer.ram > 16;
})

console.log('some | some comp: ' + sm);
