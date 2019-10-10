import {Component } from '@angular/core';

@Component({
    selector: 'app-user-1',
    templateUrl: './user-1.component.html',
    styleUrls: ['./user-1.component.css']
    //template: '<h2>John Doe</h2>'
})

export class  UserComponent1 {
    // Properties
    firstName: string;
    lastName: string;
    age: number;
    address = {
        street: <string> '',
        city:<string> '',
        state:<string> ''
    };

    foo: any;
    hasKids: boolean;
    numberArray: number[];
    stringArray: string[];
    mixedArray: any[];
    myTuple: [string, number, boolean];
    unusable: void;
    u: undefined;
    n: null;

    // ctor
    constructor() {
       this.logInitialization();
       this.firstName = 'Bob';
       this.lastName = 'Heck';
       this.age = 55;
       this.address.city = 'Midlothian';
       this.address.street = '6460 Sun Crest Ct';
       this.address.state = 'TX';

       this.foo = 111;
       this.hasKids = true;
       this.numberArray = [1,3,5,7];
       this.stringArray = ['Hello','World'];
       this.mixedArray = ['abc', 123, false];
       this.myTuple = ['abc', 123, false]; 
       this.unusable = undefined;
       this.u = undefined;
       this.n = null; 

       console.log(this.addNumbers(9,34));
    }
    
    // methods
    addNumbers(num1: number, num2: number): number {
        return num1 + num2;
    }
    
    
    logInitialization() {
        console.log(`Initializing ${this.firstName} ${this.lastName} component`);
    }



    hasBirthday() {
        console.log(`Happy Birthday ${this.firstName} ${this.lastName} !!`);
        this.age += 1;
    }
}