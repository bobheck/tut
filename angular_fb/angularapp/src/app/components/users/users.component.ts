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
    age: null,
    address: {
      street: '',
      city: '',
      state: '',
      zip: ''
    }
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
          age: 55,
          address: {
            street: '6460 Sun Crest Ct',
            city: 'Midlothian',
            state: 'TX'
          },
          isActive: true,
          registered: new Date('11/11/2018 11:11:11'),
          hide: true
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
          isActive: false,
          registered: new Date('12/11/2017 23:32:15'),
          hide: true
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
          isActive: true,
          registered: new Date('01/23/2016 02:10:11'),
          hide: true
        }
      ];
      this.loaded = true;

    }, 90);



    //this.showExtended = false;

  }

  addUser() {
    this.user.isActive = true;
    this.user.registered = new Date();
    this.users.unshift(this.user);
    console.log(this.users);
  }

  toggleHide(user: User) {
    user.hide = !user.hide;
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(123);
  }

  fireEvent(e) {
    console.log(e.target.value);
  }

}
