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
  buttonClasses = {};
  cardStyles = {};
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
          image: 'http://lorempixel.com/600/600/people/3',
          isActive: true,
          balance: 100,
          registered: new Date('11/11/2018 11:11:11')
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
         image: 'http://lorempixel.com/600/600/people/1',
         isActive: false,
         balance: 1200,
         registered: new Date('12/11/2017 23:32:15')
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
         image: 'http://lorempixel.com/600/600/people/5',
         isActive: true,
         balance: 0,
         registered: new Date('01/23/2016 02:10:11')
        }
    ];
      this.loaded = true;
      // this.addUser(
      //   {
      //     firstName: 'Pam',
      //     lastName: 'Hardy'
      //   }
      // );
      this.setButtonClasses();
      this.setCardStyles();
    }, 90);



    //this.showExtended = false;

  }

  addUser(user: User) {
    this.users.push(user);
  }
  
  setButtonClasses() {
    this.buttonClasses = {
      'btn-success': this.enableAdd,
      'big-text': this.showExtended
    }
  }

  setCardStyles() {
    this.cardStyles = {
      'padding-top': this.showExtended ? '0px' : '30px',
      'padding-bottom': this.showExtended ? '0px' : '30px',
      'padding-left': '5px',
      'padding-right': '5px',
      'font-size': this.showExtended ? '' : '2.3em'
    }
  }
}
