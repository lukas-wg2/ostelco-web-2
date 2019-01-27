import {Directive, Input, ElementRef, Renderer, HostListener, OnInit} from '@angular/core';

@Directive({
  selector: '[appHideHeader]',
})
export class HideHeaderDirective implements OnInit {

  @HostListener('ionScroll', ['$event']) onContentScroll(event) {
    console.log('hoeuthoeut', event)
    if (event.directionY === 'down') {
      console.log('heihei opacity down')
      this.renderer.setElementStyle(this.element.nativeElement, 'opacity', '0');
    } else {
      console.log('heihei opacity up')
      this.renderer.setElementStyle(this.element.nativeElement, 'opacity', '1');
    }
  }

  constructor(public element: ElementRef, public renderer: Renderer) {
    console.log('hello hide header directive');
  }

  ngOnInit() {
    this.renderer.setElementStyle(this.element.nativeElement, 'webkitTransition', 'opacity 700ms');
  }


}
