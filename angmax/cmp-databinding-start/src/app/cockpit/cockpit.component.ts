import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output('svrcreated') serverCreated = new EventEmitter<{serverName: string, serverContent: string }>();
  @Output('bpcreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string }>();
  // newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContentInput', {static: true}) serverContentInput: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  // contentInput: HTMLInputElement is left in the arguments below 
  // to show how it would have been used using localref instead
  // of the @ViewChild method currently in code

  onAddServer(nameInput: HTMLInputElement, contentInput: HTMLInputElement) {
    console.log(this.serverContentInput);
    // this.serverCreated.emit({
    //   serverName: nameInput.value, 
    //   serverContent: contentInput.value
    // });
    this.serverCreated.emit({
      serverName: nameInput.value, 
      serverContent: this.serverContentInput.nativeElement.value
    });

  }

  onAddBlueprint(nameInput: HTMLInputElement, contentInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: nameInput.value, 
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

}
