import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TripCardComponent } from './trip-card.component';
import { SkelletonLoaderModule } from '../../directives/skeleton-loader/skeleton-loader.module';
import { ImageLoadedModule } from '../../directives/image-loaded/observe-visibility.module';


@NgModule({
  declarations: [
    TripCardComponent,
  ],
  imports: [
    CommonModule,
    SkelletonLoaderModule,
    ImageLoadedModule
  ],
  exports:[
    TripCardComponent
  ]
})
export class TripCardModule { }
