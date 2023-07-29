import { Component, ElementRef, HostListener, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  @ViewChild("input") input?: ElementRef;
  @ViewChild("componentRef") componentRef?: ElementRef;
  @Input("scroolOnFocus") scrollOnFocus?: boolean = false;
  protected focused = false;

  onFocus(){
    if(this.scrollOnFocus){
      window.scrollTo({top: 165, behavior: 'smooth'});
    }
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
