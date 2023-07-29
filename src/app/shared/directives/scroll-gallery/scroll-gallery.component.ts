import { Component, ContentChildren, ElementRef, EventEmitter, HostListener, Input, Output, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ScrollGalleryItemDirective } from './scroll-gallery-item.directive';

@Component({
  selector: 'app-scroll-gallery',
  templateUrl: './scroll-gallery.component.html',
  styleUrls: ['./scroll-gallery.component.scss']
})
export class ScrollGalleryComponent {
  mouseDown = false;
  startX: number = 0;
  scrollLeft: number = 0;
  leftIndex = 0;
  leftPadding = 0;
  loading = false;

  @Input('snapPadding') snapPadding = 60;
  @Output('leftIndexChanged') leftIndexChanged = new EventEmitter<number>();
  @Output('rightIndexChanged') rightIndexChanged = new EventEmitter<number>();

  @ContentChildren(ScrollGalleryItemDirective) items?: QueryList<ScrollGalleryItemDirective>;

  public get scrollGalleryElement(): HTMLElement{
    return this.elementRef.nativeElement;
  }

  constructor(private elementRef: ElementRef) { }

  public moveRight(){
    if(this.leftIndex < this.items!.length){
      this.moveTo(this.leftIndex+1);
    }
  }
  public moveLeft(){
    if(this.leftIndex > 0){
      this.moveTo(this.leftIndex-1);
    }
  }

  public moveTo(index:number){
    this.leftIndex = index;
    this.leftIndexChanged.emit(this.leftIndex);

    this.leftPadding = this.items?.toArray().slice(0,index).reduce((acc:number, value: ScrollGalleryItemDirective) => {
      let rect = value.elementRef.nativeElement.getBoundingClientRect();
      return Math.abs(acc + rect.width);
    },0) ?? 0;

    this.scrollGalleryElement.scrollTo({left:this.leftPadding,behavior:'smooth'});
  }

  private calcLeftPadding(){
    let leftPadding = 0;
    let leftIndex = 0;
    for (let i = 0; i < this.items!.length ; i++) {
      let rect: DOMRect = this.items?.toArray()[i]!.elementRef.nativeElement.getBoundingClientRect();
      leftPadding = Math.abs(leftPadding + rect.width);
       if(this.items?.length === i){
        leftPadding = this.scrollGalleryElement.scrollLeft;
        leftIndex = i;
        break;
      }else if(this.scrollGalleryElement.scrollLeft - rect.x < this.snapPadding &&
        this.scrollGalleryElement.scrollLeft - rect.x > (this.snapPadding * -1)){
        leftIndex = i;
        break;
     }else if(this.scrollGalleryElement.scrollLeft - leftPadding < this.snapPadding &&
         this.scrollGalleryElement.scrollLeft - leftPadding > (this.snapPadding * -1)){
         leftIndex = i;
         break;
      }else if(this.scrollGalleryElement.scrollLeft < leftPadding){
        leftPadding = this.scrollGalleryElement.scrollLeft;
        leftIndex = i;
        break;
      }
    }
    this.leftIndex = leftIndex;
  }

  @HostListener('mousedown', ['$event']) mouseDownEvent(event: any) {
    this.mouseDown = true;
    this.startX = event.pageX - this.elementRef?.nativeElement.offsetLeft;
    this.scrollLeft = this.elementRef?.nativeElement.scrollLeft;
  }

  @HostListener('mouseup', ['$event']) mouseUpEvent(event: any) {
    this.mouseDown = false;
    this.calcLeftPadding();
    this.moveTo(this.leftIndex);
  }

  @HostListener('mousemove', ['$event']) mouseMoveEvent(event: any) {
    event.preventDefault();
    if (!this.mouseDown) {
      return;
    }
    const x = event.pageX - this.scrollGalleryElement.offsetLeft;
    const scroll = x - this.startX;

    this.scrollGalleryElement.scrollLeft = this.scrollLeft - scroll;
  }

  @HostListener('mouseleave', ['$event']) mouseLeaveEvent(event: any) {
    this.mouseDown = false;
  }
}
