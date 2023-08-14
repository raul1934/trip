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
  protected trips: Array<any> = [];
  protected loading = false;
  protected qtdToRequest = 0;

  constructor(private route: ActivatedRoute) {

  }
  ngOnInit(): void {
    this.city = this.route.snapshot.paramMap.get('city') ?? undefined;
    this.country = this.route.snapshot.paramMap.get('country') ?? undefined;
    this.initWindowListener();
    this.getTrips();
  }

  private initWindowListener(){
    window.addEventListener('scroll', ()=> {
      var scrollPosition = window.scrollY || document.documentElement.scrollTop;
      var documentHeight = Math.max(
        document.body.scrollHeight, document.body.offsetHeight,
        document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight
      );
      console.log(documentHeight - scrollPosition - window.innerHeight);
      var distanceFromBottom = documentHeight - scrollPosition - window.innerHeight;
      if (distanceFromBottom <= 100) {
        this.getTrips();
      }
    });
  }

  private getQtdToRequest(){
    let clientWidth = document.documentElement.clientWidth;
    let qtd = 0
    if(clientWidth < 768){
      qtd = 2;
    } else if(clientWidth < 992){
      qtd = 3;
    }else if(clientWidth < 1196){
      qtd = 4;
    } else{
      qtd = 5;
    }

    let rest = this.trips.length % qtd;
    if(rest > qtd){
      return (qtd *3) - rest;
    }

    return (qtd *3) + rest;
  }

  private getTrips(){
    if(!this.loading){
      this.loading = true;
      this.qtdToRequest = this.getQtdToRequest();
      setTimeout(()=>{
        for(let i = 0; i < this.qtdToRequest; i++){
          this.trips.push(i);
        }
        this.loading = false;
      },2000);
    }
  }

}
