import { style, transition, trigger, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'translateY(-100%)' }),
        animate('200ms ease-in', style({ transform: 'translateY(0%)' }))
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({ transform: 'translateY(-100%)' }))
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {

  protected activeIndex = 0;
  protected loading = false;
  protected index = 0;
  protected trips:Array<number> = [];
  protected qtdToRequest = 0;

  ngOnInit(): void {
    this.getTrips();
    this.initWindowListener();
  }

  private initWindowListener(){
    window.addEventListener('scroll', ()=> {
      var scrollPosition = window.scrollY || document.documentElement.scrollTop;
      var documentHeight = Math.max(
        document.body.scrollHeight, document.body.offsetHeight,
        document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight
      );
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




