import { Component, ElementRef, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @Output() scrollToSection = new EventEmitter<string>();
  constructor(private el: ElementRef) { }
  scrollIntoView(){
    this.el.nativeElement.scrollIntoView();
  }

}
