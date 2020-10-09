import { Component, Input, OnInit} from '@angular/core';

// you can use ViewEncapsulation to control scope of css

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']

})
export class ServerElementComponent implements OnInit {
 
  @Input('srvelement') element: {type: string, name: string, content: string};

  constructor() { }

  ngOnInit(): void {
  }

}
