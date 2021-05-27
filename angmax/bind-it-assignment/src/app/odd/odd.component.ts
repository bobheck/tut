import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class OddComponent implements OnInit {

  @Input('nbr') numinfo: {num: number, isodd: boolean };

  constructor() { }

  ngOnInit(): void {
  }

}
