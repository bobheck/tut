
class Person {
    constructor(name="Anonymous", age=0) {
        this.name = name;
        this.age = age;
    }

    getGreeting() {
        return `Hello, I am ${this.name}!`;
    }

    getDescription() {
        return `${this.name} is ${this.age} years old.`
    }
 }

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }

    hasMajor() {
        return !!this.major;
    }

    getDescription() {
        //return `${this.name} is ${this.age} years old and major is ${this.major}`
        let description = super.getDescription();
        if(this.hasMajor())
        {
            description += ` His/her major is ${this.major}.`
        }
        return description;
    }
}


class Traveler extends Person {
    constructor(name, age, home) {
        super(name, age);
        this.home = home;
    }

    hasHome() {
        return !!this.home;
    }

    getGreeting() {
        let greeting = super.getGreeting();
        if(this.hasHome())
        {
            greeting += ` I am visiting from ${this.home}.`
        }

        return greeting;
    }
}

const me = new Student('Bob Heck', 55, 'Computer Science');
console.log(me.getDescription());

const other = new Student(undefined, 14);
console.log(other.getDescription());

const trav1 = new Traveler('Bob Heck', 55, 'Midlothian, Texas');
console.log(trav1.getGreeting());

const trav2 = new Traveler('Jack Spratt', 55);
console.log(trav2.getGreeting());