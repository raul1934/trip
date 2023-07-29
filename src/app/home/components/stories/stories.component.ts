import { Component, ViewChild } from '@angular/core';
import { DragScrollComponent } from 'ngx-drag-scroll';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
})
export class StoriesComponent {

  @ViewChild('carrousel', { read: DragScrollComponent }) carrousel?: DragScrollComponent;

  moveLeft() {
    this.carrousel?.moveLeft();
  }

  moveRight() {
    this.carrousel?.moveRight();
  }

}
