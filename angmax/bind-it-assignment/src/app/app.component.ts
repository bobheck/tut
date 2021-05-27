import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  numbers: {num: number, isodd: boolean } [] = [];

  title = 'bind-it-assignment';


  onOddCreated(numInfo: {num: number, isodd: boolean })
  {
    this.numbers.push(numInfo);
  }

  onEvenCreated(numInfo: {num: number, isodd: boolean })
  {
    this.numbers.push(numInfo);
  }


}
