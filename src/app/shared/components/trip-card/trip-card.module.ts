import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TripCardComponent } from './trip-card.component';
import { SkelletonLoaderModule } from '../../directives/skeleton-loader/skeleton-loader.module';

@NgModule({
  declarations: [
    TripCardComponent
  ],
  imports: [
    CommonModule,
    SkelletonLoaderModule
  ],
  exports:[
    TripCardComponent
  ]
})
export class TripCardModule { }
