import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appDropdownCtrl]',
  exportAs: 'exportDropdownCtrl',
})
export class DropdownCtrlDirective {
  @Input('appDropdownCtrl') dropdown!: DropdownDirective;
  buttonCtrl!: HTMLElement;
  constructor(private elementRef: ElementRef) {
    this.buttonCtrl = elementRef.nativeElement;
   }
  @HostListener("click")
  toggle() { this.dropdown.toggle(); }
}

@Directive({
  selector: '[appDropdown]',
  exportAs: 'exportDropdown',
  host: {
    //   '(document:click)': 'onClick($event)',
    '[class.show]': 'isShow',
  },
})
export class DropdownDirective implements OnInit {
  
  @Input('appDropdown') ctrl!: DropdownCtrlDirective;
  private target!: HTMLElement;
  private isShow = false;

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
    this.target = this.elementRef.nativeElement;
  }

  open() {
    this.isShow = true;
  }

  close() {
    this.isShow = false;
  }

  toggle() {
    this.isShow = !this.isShow;
  }

  get isOpen() {
    return this.isShow;
  }

  @HostListener('document:click', ['$event', '$event.target'])
  detectClickOutside(event: MouseEvent, target: HTMLElement) {
    if (!this.target.contains(target) && !this.ctrl.buttonCtrl.contains(target)) {
      this.close();
    }
  }
}