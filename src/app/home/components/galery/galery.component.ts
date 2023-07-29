import { ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { DragScrollComponent } from 'ngx-drag-scroll';

@Component({
  selector: 'app-galery',
  templateUrl: './galery.component.html',
  styleUrls: ['./galery.component.scss']
})
export class GaleryComponent {

  @ViewChild('carrousel', { read: DragScrollComponent }) carrousel?: DragScrollComponent;
  @ViewChild('carrousel', { read: ElementRef }) carrouselRef?: ElementRef<HTMLElement>;
  protected activeIndex = 0;
  protected loading = false;
  protected activeTripIndex = 0;
  protected trips: Array<any> = [1, 2, 3, 4, 5, 6];

  constructor(protected changeDetector: ChangeDetectorRef) { }

  moveLeft() {
    this.activeTripIndex = this.activeTripIndex > 0 ? this.activeTripIndex - 1 : 0;
    this.carrousel?.moveLeft();
    this.checkforNextPage();
  }

  moveRight() {
    this.activeTripIndex = this.activeTripIndex < this.trips.length ? this.activeTripIndex + 1 : this.trips.length;
    this.carrousel?.moveTo(this.activeTripIndex);
    this.checkforNextPage();
   console.log(this.carrouselRef?.nativeElement.scrollWidth)
   console.log(this.carrouselRef?.nativeElement.scrollLeft);
  }

  checkforNextPage() {
    if (this.activeTripIndex + this.getOffset() == this.trips.length && !this.loading) {
      this.loading = true;
      setTimeout(() => {
        [1, 2, 3, 4, 5, 6].map(() => {
       //   this.trips.push(1);
        });
      }, 5000);

      setTimeout(() => {
      //  this.loading = false;
      },10000);
    }
  }

  getOffset(){
    let width = window.screenX;
    if(width >= 1196){
      return 4;
    }else if(width >= 996){
      return 3;
    }else if(width >= 768){
      return 2;
    }
    else {
      return 1;
    }
  }

  indexChanged(index:number){
    this.activeTripIndex = index + 4;
    this.checkforNextPage();
  }
}
