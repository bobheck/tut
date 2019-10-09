class Person {
    name: string;
    private type: string;
    protected age: number = 55;

    // this assigns name to name prop and also creates
    // another public property on the fly 
    constructor(name: string, public username: string) {
        this.name = name;
    }

    printAge() {
        console.log(this.age);
    }

    setType(type: string) {
        this.type = type;
        console.log(this.type);
    }

}

const person = new Person('Bob','Bobby');
console.log(person);
person.printAge();
person.setType("Heavyweight");

// Inheritance

class Bob extends Person {
   constructor(username: string) {
       super('Bob', username);
   } 
}

const bob = new Bob("Bobby");
console.log(bob);

// Getters and setters
class Plant {
    private m_species: string = "Default";

    set species(value: string) {
        if(value.length > 3)
        {
            this.m_species = value;
        } else {
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
    static PI: number = 3.14;
    static calcCircumference(radius: number): number {
        return this.PI * radius * 2;
    }
}

console.log(2 * Helpers.PI);
console.log(Helpers.calcCircumference(4));

// Abstract Classes

abstract class Project {
    projectName: string = "Default";
    budget: number = 1200;

    abstract changeName(name: string): void;

    calcBudget() : number {
        return this.budget = this.budget * 2;
    }
}

class Project1 extends Project {
    changeName(name: string): void {
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
    private static instance: OnlyOne;
    public readonly name: string;
    private constructor(name: string) {
        this.name = name;
    }

    static getInstance() {
        if(!OnlyOne.instance) {
            OnlyOne.instance = new OnlyOne('The Only One');
        }
        return OnlyOne.instance;
    }
}

//let wrong = new OnlyOne('The Only One');
let right = OnlyOne.getInstance();
console.log(right);

