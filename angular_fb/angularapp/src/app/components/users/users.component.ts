import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = true;

  constructor() { }

  ngOnInit() {
    
    setTimeout(() => {
      this.users = [
        {
          firstName: 'Bob',
          lastName: 'Heck',
          age: 55,
          address: {
              street: '6460 Sun Crest Ct',
              city: 'Midlothian',
              state: 'TX'
          },
          image: 'http://lorempixel.com/600/600/people/3'
        },
        {
          firstName: 'Allison',
          lastName: 'Smith',
          age: 25,
          address: {
              street: '455 Maple Dr',
              city: 'Middle',
              state: 'NE'
         },
         image: 'http://lorempixel.com/600/600/people/1'
        },
        {
          firstName: 'Dan',
          lastName: 'Tarker',
          age: 76,
          address: {
              street: '1123 Oak St',
              city: 'Thattown',
              state: 'MA'
         },
         image: 'http://lorempixel.com/600/600/people/5'
        }
    ];
      this.loaded = true;
      // this.addUser(
      //   {
      //     firstName: 'Pam',
      //     lastName: 'Hardy'
      //   }
      // );
    }, 90);

    //this.showExtended = false;

  }

  addUser(user: User) {
    this.users.push(user);
  }
  

}
