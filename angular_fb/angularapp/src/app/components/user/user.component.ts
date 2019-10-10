import {Component, OnInit } from '@angular/core';
import {User} from '../../models/User';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
    //template: '<h2>John Doe</h2>'
})

export class  UserComponent {
    // Properties
    user: User;

    // ctor
    constructor() {
    }

    ngOnInit() {
        this.user = {
            firstName: 'Bob',
            lastName: 'Heck',
            age: 55,
            address: {
                street: '6460 Sun Crest Ct',
                city: 'Midlothian',
                state: 'TX'
            }
        }
    }
}

