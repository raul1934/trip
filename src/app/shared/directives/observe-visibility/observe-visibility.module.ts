import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObserveVisibilityDirective, ObserveVisibilityItemDirective } from './observe-visibility.directive';

@NgModule({
  declarations: [
    ObserveVisibilityDirective,
    ObserveVisibilityItemDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ObserveVisibilityDirective,
    ObserveVisibilityItemDirective
  ]
})
export class ObserveVisibilityModule { }
