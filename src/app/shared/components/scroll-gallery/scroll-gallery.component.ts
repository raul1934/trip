import { AfterViewInit, Component, ContentChildren, ElementRef, EventEmitter, HostListener, Input, Output, QueryList, ViewChild } from '@angular/core';
import { ScrollGalleryItemDirective } from './scroll-gallery-item.directive';

@Component({
  selector: 'app-scroll-gallery',
  templateUrl: './scroll-gallery.component.html',
  styleUrls: ['./scroll-gallery.component.scss']
})
export class ScrollGalleryComponent implements AfterViewInit {

  mouseDown:boolean = false;
  scrolling:boolean = false;
  startX: number = 0;
  scrollLeft: number = 0;
  leftIndex:number = 0;
  rightIndex:number = 0;
  leftPadding:number = 0;
  itemsVisible = 0;
  loading = false;
  private observer?: IntersectionObserver;

  @Input('snapPadding') snapPadding = 60;
  @Output('leftIndexChanged') leftIndexChanged = new EventEmitter<number>();
  @Output('rightIndexChanged') rightIndexChanged = new EventEmitter<number>();

  @ViewChild('scrollGalleryRef') scrollGalleryRef?: ElementRef;
  @ContentChildren(ScrollGalleryItemDirective) items?: QueryList<ScrollGalleryItemDirective>;

  public get scrollGalleryElement(): HTMLElement {
    return this.scrollGalleryRef?.nativeElement as HTMLElement;
  }

  constructor() { }

  ngAfterViewInit(): void {
    this.observeIntersection();
  }

  public moveRight() {
    if (this.rightIndex < this.items!.length - 1) {
      this.leftIndex++;
      this.indexToLeftPadding(this.leftIndex);
      this.moveTo(this.leftIndex);
    }
  }
  public moveLeft() {
    if (this.leftIndex > 0) {
      this.leftIndex--;
      this.indexToLeftPadding(this.leftIndex);
      this.moveTo(this.leftIndex);
    }
  }

  public moveTo(index: number) {
    this.leftIndex = index;
    this.rightIndex = this.leftIndex + this.itemsVisible;
    this.leftIndexChanged.emit(this.leftIndex);
    this.rightIndexChanged.emit(this.rightIndex);
    this.scrollGalleryElement.scrollTo({ left: this.leftPadding, behavior: 'smooth' });
  }

  private updateIndex(): void {
    let itemsBounds: DOMRect[] = [];
    let leftPadding = 0;

    if (this.items) {
      itemsBounds = this.items.toArray().map((item) => item.elementRef.nativeElement.getBoundingClientRect());
      let index: number;

      for (index = 0; index < itemsBounds.length; index++) {
        const bound = itemsBounds[index];
        leftPadding += bound.width;

        if (this.scrollGalleryElement.scrollLeft <= leftPadding) {
          break;
        }
      }
      this.leftIndex = index;
      this.observeIntersection();
    }
  }

  private indexToLeftPadding(index?: number) {
    let itemsBounds: DOMRect[] = [];
    let leftPadding = 0;
    if (!index) {
      index = this.leftIndex;
    }
    if (this.items && index > 0) {
      itemsBounds = this.items.toArray().slice(0, index).map((item) => item.elementRef.nativeElement.getBoundingClientRect());
      for (let index = 0; index < itemsBounds.length; index++) {
        leftPadding += itemsBounds[index].width;
      }
    }
    this.leftPadding = leftPadding;
  }

  private observeIntersection(): void {
    if (this.observer) {
      this.observer.disconnect();
    }

    if (!this.items) {
      return;
    }

    this.observer = new IntersectionObserver(this.handleIntersection.bind(this), { root: this.scrollGalleryElement });
    this.items.toArray().forEach(element => this.observer!.observe(element.elementRef.nativeElement));
  }

  private handleIntersection(entries: IntersectionObserverEntry[], observer: IntersectionObserver): void {
    let items = 0;
    entries.forEach((entry) => {
      if (entry.isIntersecting && entry.intersectionRatio > 0.99) {
        items++;
      }
    });
    observer.disconnect();
    this.itemsVisible = items;
  }


  @HostListener('mousedown', ['$event']) mouseDownEvent(event: any) {
    this.mouseDown = true;
    this.startX = event.pageX - this.scrollGalleryElement.offsetLeft;
    this.scrollLeft = this.scrollGalleryElement.scrollLeft;
  }

  @HostListener('touchstart', ['$event']) onTouchStart(event: any): void {
    this.mouseDown = true;
    this.startX = event.targetTouches[0].pageX - this.scrollGalleryElement.offsetLeft;
    this.scrollLeft = this.scrollGalleryElement.scrollLeft;
  }

  @HostListener('mouseup', ['$event']) mouseUpEvent(event: any) {
    this.mouseDown = false;
    if(this.scrolling){
      this.scrolling = false;
      this.updateIndex();
      this.indexToLeftPadding();
      this.moveTo(this.leftIndex);
    }
  }

  @HostListener('touchend', ['$event']) onTouchEnd(event: any): void {
    this.mouseDown = false;
    this.scrolling = false;
    this.updateIndex();
    this.indexToLeftPadding();
    this.moveTo(this.leftIndex);
  }

  @HostListener('mousemove', ['$event']) mouseMoveEvent(event: any) {
    if (!this.mouseDown) {
      return;
    }
    const x = event.pageX - this.scrollGalleryElement.offsetLeft;
    const scroll = x - this.startX;

    if (this.scrollLeft - scroll > 30 || scroll - this.scrollLeft < -30) {
      this.scrolling = true;
    }
    this.scrollGalleryElement.scrollLeft = this.scrollLeft - scroll;
  }

  @HostListener('touchmove', ['$event']) onTouchMove(event: any): void {
    if (!this.mouseDown) {
      return;
    }

    const x = event.targetTouches[0].pageX - this.scrollGalleryElement.offsetLeft;
    const scroll = x - this.startX;

    if (this.scrollLeft - scroll > 30 || scroll - this.scrollLeft < -30) {
      this.scrolling = true;
    }
    this.scrollGalleryElement.scrollLeft = this.scrollLeft - scroll;
  }

  @HostListener('mouseleave', ['$event']) mouseLeaveEvent(event: any) {
    if (this.mouseDown) {
      this.mouseDown = false;
      this.scrolling = false;
      this.updateIndex();
      this.indexToLeftPadding();
      this.moveTo(this.leftIndex);
    }
  }

  @HostListener('window:resize', ['$event']) windowResizeEvent(event: any) {
    this.observeIntersection();
  }
}
