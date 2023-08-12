import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadedDirective } from './image-loaded.directive';

@NgModule({
  declarations: [
    LoadedDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[
    LoadedDirective
  ]
})
export class ImageLoadedModule { }
