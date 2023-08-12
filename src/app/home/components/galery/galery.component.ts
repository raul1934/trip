import { ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { DragScrollComponent } from 'ngx-drag-scroll';
import { ScrollGalleryComponent } from 'src/app/shared/components/scroll-gallery/scroll-gallery.component';

@Component({
  selector: 'app-galery',
  templateUrl: './galery.component.html',
  styleUrls: ['./galery.component.scss']
})
export class GaleryComponent {

  @ViewChild('carrousel', { read: ScrollGalleryComponent }) carrousel?: DragScrollComponent;
  @ViewChild('carrousel', { read: ElementRef }) carrouselRef?: ElementRef<HTMLElement>;
  protected activeIndex = 0;
  protected loading = false;
  protected trips: Array<any> = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6];

  constructor(protected changeDetector: ChangeDetectorRef) { }

  moveLeft() {
    this.carrousel?.moveLeft();
  }

  moveRight() {
    this.carrousel?.moveRight();
  }

  rightIndexChange(index:number){
    if(this.trips.length - index  < 3 && !this.loading){
      this.loading = true;
      setTimeout(()=>{
        this.trips.push(1,3,3,3,3,2);
        this.loading = false;
      },10000)
    }
  }
}
