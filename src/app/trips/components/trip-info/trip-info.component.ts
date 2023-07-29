import { animate, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-trip-info',
  templateUrl: './trip-info.component.html',
  styleUrls: ['./trip-info.component.scss'],
  animations: [
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
export class TripInfoComponent {

  @Input() visible!: boolean;
  @Output() visibleChange = new EventEmitter<boolean>();

  @Output() onClose = new EventEmitter<void>();

  closeFinished(event: any) {
    if (event.toState == "void") {
      this.onClose.emit();
    }
  }
}
