import { Component, OnInit, ViewChild } from '@angular/core';
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
  @ViewChild('userForm') form: any;

  constructor() { }

  ngOnInit() {

    setTimeout(() => {
      this.users = [
        {
          firstName: 'Bob',
          lastName: 'Heck',
          email: 'bobheck11@yahoo.com',
          isActive: true,
          registered: new Date('11/11/2018 11:11:11'),
          hide: true
        },
        {
          firstName: 'Allison',
          lastName: 'Smith',
          email: 'asmith111@yahoo.com',
          isActive: false,
          registered: new Date('12/11/2017 23:32:15'),
          hide: true
        },
        {
          firstName: 'Dan',
          lastName: 'Tarker',
          email: 'dt1978@yahoo.com',
          isActive: true,
          registered: new Date('01/23/2016 02:10:11'),
          hide: true
        }
      ];
      this.loaded = true;

    }, 90);

  }
 
  toggleHide(user: User) {
    user.hide = !user.hide;
  }

  onSubmit({value, valid}: {value: User, valid: boolean}) {
    if(!valid) {
        console.log('Form is invalid');
    }
    else{
      value.isActive = true;
      value.registered = new Date();
      value.hide = true;
      this.users.unshift(value);
      this.form.reset;
    }
  }


}
