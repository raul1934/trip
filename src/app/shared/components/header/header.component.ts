import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header-bar',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {

  @ViewChild("input") input?: ElementRef;
  @ViewChild("componentRef") componentRef?: ElementRef;
  protected focused = false;
  protected searchInCountry = false;
  protected searchText = "";

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
