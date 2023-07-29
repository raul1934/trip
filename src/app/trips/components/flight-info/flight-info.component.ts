import { animate, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from '@techiediaries/ngx-qrcode';

@Component({
  selector: 'app-flight-info',
  templateUrl: './flight-info.component.html',
  styleUrls: ['./flight-info.component.scss'],
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
export class FlightInfoComponent {
  elementType = NgxQrcodeElementTypes.URL;
  value = 'Techiediaries';
  correctionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;

  @Input() visible!: boolean;
  markers:Array<google.maps.LatLng> = []
  @Output() visibleChange = new EventEmitter<boolean>();

  @Output() onClose = new EventEmitter<void>();

  closeFinished(event: any) {
    if (event.toState == "void") {
      this.onClose.emit();
    }
  }
}
