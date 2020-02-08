import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user: User = {
    firstName: '',
    lastName: '',
    email: ''
   };
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = false;
  showUserForm: boolean = false;

  constructor() { }

  ngOnInit() {

    setTimeout(() => {
      this.users = [
        {
          firstName: 'Bob',
          lastName: 'Heck',
          email: 'bobheck11@gmail.com',
          isActive: true,
          registered: new Date('11/11/2018 11:11:11'),
          hide: true
        },
        {
          firstName: 'Allison',
          lastName: 'Smith',
          email: 'asmith@someemail.com',
          isActive: false,
          registered: new Date('12/11/2017 23:32:15'),
          hide: true
        },
        {
          firstName: 'Dan',
          lastName: 'Tarker',
          email: 'dtarker@someemail.com',
          isActive: true,
          registered: new Date('01/23/2016 02:10:11'),
          hide: true
        }
      ];
      this.loaded = true;

    }, 90);



    //this.showExtended = false;

  }

  // addUser() {
  //   this.user.isActive = true;
  //   this.user.registered = new Date();
  //   this.users.unshift(this.user);

  //   this.user = {
  //     firstName: '',
  //     lastName: '',
  //     email: ''
  //   };

  //   console.log(this.users);
  // }

  onSubmit(e) {
    e.preventDefault();
    console.log(123);
  }

}
