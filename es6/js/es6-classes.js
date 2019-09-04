
// pre-es6, using prototypes
function OldCar(options) {
    this.title = options.title;
}

OldCar.prototype.drive = function() {
    return 'vroom !!';
}

function OldToyota(options) {
    OldCar.call(this, options);
    this.color = options.color;
}

OldToyota.prototype = Object.create(OldCar.prototype);
OldToyota.prototype.constructor = OldToyota;
OldToyota.prototype.honk = function() {
    return 'beep';
}

const oldcar = new OldCar({title: 'Focus'});
console.log('oldcar: ', oldcar);
console.log('oldcar.drive: ', oldcar.drive());

const oldtoyota = new OldToyota({color: 'red', title: 'Daily Driver'});

console.log('oldtoyota: ', oldtoyota);
console.log('oldtoyota.drive(): ', oldtoyota.drive());
console.log('oldtoyota.honk(): ', oldtoyota.honk());



// es6 classes

class Car {
    constructor({title}) {
        this.title = title;
    }
    
    drive() {
        return 'vroom !!';
    }    

    honk() {
        return 'beep';
    }    
}

class Toyota extends Car {
    constructor(options) {
        super(options);
        this.color = options.color;
    }
}


const car = new Car({title: 'Toyota'});
console.log('car: ', car);
console.log('car.drive(): ', car.drive());
console.log('car.honk(): ', car.honk());

const toyota = new Toyota({color: 'blue', title:'Daily Driver'});
console.log('toyota: ', toyota);
console.log('toyota.drive(): ', toyota.drive());
console.log('toyota.honk(): ', toyota.honk());