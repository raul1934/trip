import { Component, ElementRef, HostListener, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss']
})
export class DateComponent {

  @ViewChild("input") input?: ElementRef;
  @ViewChild("componentRef") componentRef?: ElementRef;
  @Input("scroolOnFocus") scrollOnFocus?: boolean = false;
  protected focused = false;

  onFocus(){
    this.focused = true;
  }

  onBlur(){
    this.focused = false;
  }

  @HostListener('document:mousedown', ['$event'])
  onGlobalClick(event:any): void {
     if (!this.componentRef?.nativeElement.contains(event.target)) {
      this.onBlur();
     }
  }
}
