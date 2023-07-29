import { Component, ElementRef } from '@angular/core';
@Component({
  selector: 'skeleton-rect',
  host: {
    'class': 'pulse',
  },
  template: ``,
  styleUrls: ['./skeleton-loader.component.scss'],
})
export class RectComponent {
  width: string | undefined;
  height: string | undefined;
  borderRadius: string | undefined;
  className: string | undefined;

  constructor(private host: ElementRef<HTMLElement>) { }

  ngOnInit() {
    const host = this.host.nativeElement;

    if (this.className) {
      host.classList.add(this.className);
    }

    host.style.setProperty('--skeleton-rect-width', this.width ?? '100%');
    host.style.setProperty('--skeleton-rect-height', this.height ?? '20px');
    host.style.setProperty('--skeleton-rect-border-radius', this.borderRadius ?? '0px');
  }
}
