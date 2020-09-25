import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assgn-databinding',
  templateUrl: './assgn-databinding.component.html',
  styleUrls: ['./assgn-databinding.component.css']
})
export class AssgnDatabindingComponent implements OnInit {

  username: string = '';
  allowReset = false;

  constructor() { }

  ngOnInit(): void {
  }

  onChangeUsername() {
    this.allowReset = this.username.length > 0;
  }

  onReset() {
    this.username = '';
  }
}
