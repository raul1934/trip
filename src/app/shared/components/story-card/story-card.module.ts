import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoryCardComponent } from './story-card.component';

@NgModule({
  declarations: [
    StoryCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    StoryCardComponent
  ]
})
export class StoryCardModule { }
