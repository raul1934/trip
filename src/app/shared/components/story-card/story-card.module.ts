import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoryCardComponent } from './story-card.component';
import { ImageLoadedModule } from '../../directives/image-loaded/observe-visibility.module';
import { SkelletonLoaderModule } from '../../directives/skeleton-loader/skeleton-loader.module';

@NgModule({
  declarations: [
    StoryCardComponent,
  ],
  imports: [
    CommonModule,
    SkelletonLoaderModule,
    ImageLoadedModule
  ],
  exports:[
    StoryCardComponent
  ]
})
export class StoryCardModule { }
