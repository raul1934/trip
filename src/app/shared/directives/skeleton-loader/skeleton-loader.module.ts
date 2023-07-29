import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RectComponent } from './skeleton-loader.component';
import { SkeletonDirective } from './skeleton-loader.directive';

@NgModule({
  declarations: [
    RectComponent,
    SkeletonDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[
    SkeletonDirective
  ]
})
export class SkelletonLoaderModule { }
