import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appScrollGalleryItem]'
})
export class ScrollGalleryItemDirective {

  constructor(public elementRef: ElementRef) { }

}
