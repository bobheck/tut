class Person {
    // this assigns name to name prop and also creates
    // another public property on the fly 
    constructor(name, username) {
        this.username = username;
        this.age = 55;
        this.name = name;
    }
    printAge() {
        console.log(this.age);
    }
    setType(type) {
        this.type = type;
        console.log(this.type);
    }
}
const person = new Person('Bob', 'Bobby');
console.log(person);
person.printAge();
person.setType("Heavyweight");
// Inheritance
class Bob extends Person {
    constructor(username) {
        super('Bob', username);
    }
}
const bob = new Bob("Bobby");
console.log(bob);
// Getters and setters
class Plant {
    constructor() {
        this.m_species = "Default";
    }
    set species(value) {
        if (value.length > 3) {
            this.m_species = value;
        }
        else {
            this.m_species = "Default";
        }
    }
    get species() {
        return this.m_species;
    }
}
let plant = new Plant();
console.log(plant.species);
plant.species = "Ab";
console.log(plant.species);
plant.species = "Abcd";
console.log(plant.species);
// static properties and methods
class Helpers {
    static calcCircumference(radius) {
        return this.PI * radius * 2;
    }
}
Helpers.PI = 3.14;
console.log(2 * Helpers.PI);
console.log(Helpers.calcCircumference(4));
// Abstract Classes
class Project {
    constructor() {
        this.projectName = "Default";
        this.budget = 1200;
    }
    calcBudget() {
        return this.budget = this.budget * 2;
    }
}
class Project1 extends Project {
    changeName(name) {
        this.projectName = name;
    }
}
let proj = new Project1();
console.log(proj);
proj.changeName('Rose Lawn');
console.log(proj);
proj.calcBudget();
console.log(proj);
// Private constructors and singletons
class OnlyOne {
    constructor(name) {
        this.name = name;
    }
    static getInstance() {
        if (!OnlyOne.instance) {
            OnlyOne.instance = new OnlyOne('The Only One');
        }
        return OnlyOne.instance;
    }
}
//let wrong = new OnlyOne('The Only One');
let right = OnlyOne.getInstance();
console.log(right);
