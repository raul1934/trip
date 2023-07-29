import { trigger, transition, style, animate } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-galery',
  templateUrl: './galery.component.html',
  styleUrls: ['./galery.component.scss'],
  animations:[
    trigger('fade', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-10%)' }),
        animate(300, style({ opacity: 1, transform: 'translateX(0%)' }))
      ]),
      transition(':leave', [
        style({ opacity: 1, transform: 'translateX(0%)' }),
        animate(300, style({ opacity: 0, transform: 'translateX(-10%)' }))
      ])
    ])
  ]
})
export class GaleryComponent {
  public visible = false;

  closeFinished(event: any) {
    if (event.toState == "void") {
    }
  }

}
