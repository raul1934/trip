import { Component } from '@angular/core';

@Component({
  selector: 'app-story-card',
  templateUrl: './story-card.component.html',
  styleUrls: ['./story-card.component.scss']
})
export class StoryCardComponent {

  protected isLoadingImage = true;

  protected timestamp:any;

  constructor() {
    this.timestamp = new Date().getTime() + (Math.random() + 1).toString(36).substring(7);
  }

}
