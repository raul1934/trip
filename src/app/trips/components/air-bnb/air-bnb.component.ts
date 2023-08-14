import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-air-bnb',
  templateUrl: './air-bnb.component.html',
  styleUrls: ['./air-bnb.component.scss']
})
export class AirBnbComponent {
  @Input() active = false;
}
