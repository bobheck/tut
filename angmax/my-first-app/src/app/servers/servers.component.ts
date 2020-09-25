import { Component, OnInit } from '@angular/core';

@Component({
  // using [compname] means you can add the compname to any tag as an
  // attribute and it will use that tag
  // selector: '[app-servers]',

  // likewise, select by class using
  // selector: '.app-servers.',
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverName = '';
  serverCreated = false;
  servers = [
    '10',
    '11' 
  ]

  constructor() { 
    // setTimeout(() => {
    //   this.allowNewServer = true;
    // }, 2000);
   }

  ngOnInit(): void {
    
  }

  // onUpdateServerName(event: Event) {
   
  //   this.serverName = (<HTMLButtonElement>event.target).value;

  // }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);


    //this.serverCreationStatus = 'Server ' + this.serverName + ' was created';
  }
}
