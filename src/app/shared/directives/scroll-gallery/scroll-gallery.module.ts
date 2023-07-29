import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScrollGalleryComponent } from './scroll-gallery.component';
import { ScrollGalleryItemDirective } from './scroll-gallery-item.directive';

@NgModule({
  declarations: [
    ScrollGalleryComponent,
    ScrollGalleryItemDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ScrollGalleryComponent,
    ScrollGalleryItemDirective
  ]
})
export class ScrollGalleryModule { }
