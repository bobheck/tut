import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-gamecontrol',
  templateUrl: './gamecontrol.component.html',
  styleUrls: ['./gamecontrol.component.css']
})
export class GamecontrolComponent implements OnInit {

 nbr: number = 0;  
 intv: any;
 @Output('oddCreated') oddCreated = new EventEmitter<{num: number}>();
 @Output('evenCreated') evenCreated = new EventEmitter<{num: number}>();

  constructor() { }

  ngOnInit(): void {
  }

  startGen() {
     this.intv = setInterval(()=>{
       this.nbr = 1 + this.nbr;
       if(this.nbr % 2 == 0)
       {
         this.odd();
       }
       else
       {
         this.even();
       }
      }, 1000);
  }

  stopGen() {
    clearInterval(this.intv);
  }

  odd()
  {
      console.log('odd ' + this.nbr);
      this.oddCreated.emit({ num: this.nbr});
  }

  even()
  {
    console.log('even ' + this.nbr);
     this.evenCreated.emit({ num: this.nbr});
  }

}
