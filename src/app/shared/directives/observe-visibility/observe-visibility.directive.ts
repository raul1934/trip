import { AfterContentInit, ContentChildren, Directive, ElementRef, EventEmitter, Input, OnDestroy, Output, QueryList } from "@angular/core";

@Directive({
  selector: '[observeVisibilityItem]',
})
export class ObserveVisibilityItemDirective {
  constructor(public elementRef: ElementRef) { }
}

@Directive({
  selector: '[observeVisibility]',
})
export class ObserveVisibilityDirective implements AfterContentInit, OnDestroy {
  @Input('observeVisibilityThreshold') threshold: Array<number> = [0.1];
  @Output('observeVisibilityIndexChange') intersectionChange = new EventEmitter<number>();
  @ContentChildren(ObserveVisibilityItemDirective, { descendants: true }) items!: QueryList<ObserveVisibilityItemDirective>;
  private observer?: IntersectionObserver;

  constructor(private elementRef:ElementRef) { }

  ngAfterContentInit(): void {
    this.observer = new IntersectionObserver(entries => {
      entries.forEach((entry: IntersectionObserverEntry) => {
        if (entry.isIntersecting) {
          let index = this.items.toArray().findIndex((value: ObserveVisibilityItemDirective) => value.elementRef.nativeElement === entry.target);
          this.intersectionChange.emit(index);
        }
      });
    }, {
      root: this.elementRef.nativeElement,
      threshold: this.threshold
    });

    this.items?.forEach((value: ObserveVisibilityItemDirective) => {
      this.observer?.observe(value.elementRef.nativeElement);
    });
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }
}



