import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { DragScrollComponent } from 'ngx-drag-scroll';

@Component({
  selector: 'app-nav-location',
  templateUrl: './nav-location.component.html',
  styleUrls: ['./nav-location.component.scss']
})
export class NavLocationComponent {

  @Input() set selectedIndex(index: number) {
    this._index = index;
    this.carrousel?.moveTo(index);
  }
  @Output() indexChanged = new EventEmitter<number>();
  @Output() seeAllCliked = new EventEmitter<void>();
  @ViewChild(DragScrollComponent, {read: DragScrollComponent}) carrousel?: DragScrollComponent;

  protected _index = 0;

  protected indexClicked(index:number){
    this.indexChanged.emit(index);
  }
}
