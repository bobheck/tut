import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  
  constructor() { }

  ngOnInit() {
    
    this.users = [
        {
          firstName: 'Bob',
          lastName: 'Heck',
          age: 55,
          address: {
              street: '6460 Sun Crest Ct',
              city: 'Midlothian',
              state: 'TX'
          }
        },
        {
          firstName: 'Allison',
          lastName: 'Smith',
          age: 25,
          address: {
              street: '455 Maple Dr',
              city: 'Middle',
              state: 'NE'
         }
        },
        {
          firstName: 'Dan',
          lastName: 'Tarker',
          age: 76,
          address: {
              street: '1123 Oak St',
              city: 'Thattown',
              state: 'MA'
         }
        }
    ];

    this.addUser({
      firstName: 'Janet',
      lastName: 'Joster',
      age: 46,
      address: {
          street: '111 Argyle Ave',
          city: 'Ogden',
          state: 'UT'
     }
    }
)
  }

  addUser(user: User) {
    this.users.push(user);
  }

}
