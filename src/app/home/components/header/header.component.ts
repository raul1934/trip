import { animate, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Component, HostListener, ViewChild } from '@angular/core';
import { DragScrollComponent } from 'ngx-drag-scroll';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'translateY(-100%)' }),
        animate('200ms ease-in-out', style({ transform: 'translateY(0%)'})),
      ]),
      transition(':leave', [
        animate('200ms ease-in-out', style({ transform: 'translateY(-100%)'})),
      ])
    ]),
    trigger('slideLeft', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('200ms ease-in-out', style({ transform: 'translateX(0%)' }))
      ]),
      transition(':leave', [
        animate('200ms ease-in-out', style({ transform: 'translateX(-100%)' }))
      ])
    ]),
  ]
})
export class HeaderComponent implements AfterViewInit {

  protected smallBar = false;
  protected hamburguerOpen = false;

  @HostListener('window:scroll') onScroll(): void {
   this.checkSmallBarVisible();
  }

  @HostListener('window:resize') onResize(): void {
   this.checkSmallBarVisible();
  }

  ngAfterViewInit(): void {
    this.checkSmallBarVisible();
  }

  private checkSmallBarVisible(){
    if(Math.round(window.scrollY) > 150 || document.documentElement.clientWidth < 992){
      this.smallBar = true
    }else{
      this.smallBar = false;
    }
  }

  protected onHamburgerClick(){
    this.hamburguerOpen = !this.hamburguerOpen;

    if(this.hamburguerOpen){
      document.body.classList.add('modal-open');
    }else{
      document.body.classList.remove('modal-open');
    }
  }

}
