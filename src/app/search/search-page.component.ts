import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-search',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {
  protected country?: string;
  protected city?: string;
  protected trips: Array<any> = [1, 2, 3, 4, 5, 6];
  protected loading = false;

  constructor(private route: ActivatedRoute) {

  }
  ngOnInit(): void {
    this.city = this.route.snapshot.paramMap.get('city') ?? undefined;
    this.country = this.route.snapshot.paramMap.get('country') ?? undefined;
  }

  @HostListener("window:scroll", [])
  onScroll(): void {

    if((window.innerHeight + window.scrollY) >= document.body.offsetHeight && !this.loading) {
      this.loading = true;

      setTimeout(()=>{
        [1,2,3,4,5,6].map(()=>{
          this.trips.push(1);
        });
        this.loading = false;
      },5000);
    }
  }
}
