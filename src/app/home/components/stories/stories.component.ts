import { Component, ViewChild } from '@angular/core';
import { ScrollGalleryComponent } from 'src/app/shared/components/scroll-gallery/scroll-gallery.component';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
})
export class StoriesComponent {

  @ViewChild('carrousel', { read: ScrollGalleryComponent }) carrousel?: ScrollGalleryComponent;
  @ViewChild('StoriesVierwerCaroussel', { read: ScrollGalleryComponent }) storiesVierwerCaroussel?: ScrollGalleryComponent;
  protected storiesViewerShow = false;

  moveLeft() {
    this.carrousel?.moveLeft();
  }

  moveRight() {
    this.carrousel?.moveRight();
  }

  rightIndexChange(index: number){

  }

  onStoryClick(index: number){
    this.storiesViewerShow = true;
    this.storiesVierwerCaroussel?.moveTo(index);
  }

  storiesViewerMoveLeft() {
    this.storiesVierwerCaroussel?.moveLeft();
  }

  storiesViewermoveRight() {
    this.storiesVierwerCaroussel?.moveRight();
  }
}
