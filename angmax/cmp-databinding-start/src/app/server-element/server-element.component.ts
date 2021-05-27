import { 
  Component, 
  Input, 
  OnInit, 
  OnChanges, 
  SimpleChanges, 
  ComponentFactoryResolver, 
  DoCheck, ViewChild, ElementRef, ContentChild} from '@angular/core';

// you can use ViewEncapsulation to control scope of css

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']

})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck {
 
  @Input('srvelement') element: {type: string, name: string, content: string};
  @ViewChild('heading', {static: true}) hdr: ElementRef;
  @ContentChild('contentParagraph', {static: true}) paragraph: ElementRef;

  constructor() {
    console.log('constructor called');
   }

   ngOnChanges(changes: SimpleChanges) {
     console.log('ngOnChanges called');
     console.log(changes);
   }

   ngDoCheck() {
    console.log('ngDoCheck called');
   }

  ngOnInit(): void {
    console.log('ngOnInit called');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit called');
    console.log('paragraph content:')
    console.log(this.paragraph.nativeElement.textContent);
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit called');
    console.log(this.hdr.nativeElement.textContent);
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy called');
  }
}
