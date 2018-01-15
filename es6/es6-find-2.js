
function Car(model) {
    this.model = model;
}

var cars = [
    new Car('Silverado'),
    new Car('Focus'),
    new Car('Camaro'),
    new Car('Mustang'),
    new Car('Civic'),
    new Car('Soul')
];

var fc = cars.find(function(car) {
    return car.model === 'Civic';
});

console.log(fc);

