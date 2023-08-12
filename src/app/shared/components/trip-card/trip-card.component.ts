import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-trip-card',
  templateUrl: './trip-card.component.html',
  styleUrls: ['./trip-card.component.scss']
})
export class TripCardComponent {

  @Input('lightMode') lightMode :boolean = false;
  @Input('aspectRatio') aspectRatio :number = 0.736/1;
  @Input('isLoading') isLoading :boolean = false;

  protected isLoadingBackgroundImage = true;
  protected isLoadingProfileImage = true;

  protected timestamp:any;
  constructor() {
    this.timestamp = new Date().getTime() + (Math.random() + 1).toString(36).substring(7);
  }


  loaded(){
    alert('teste');
  }
}
