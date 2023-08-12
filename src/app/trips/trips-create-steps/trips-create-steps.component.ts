import { Component } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { TripsCreateStepsService } from './trips-create-steps.service';
import { Router } from '@angular/router';

enum TRIPS_CREATE_STEPS{
  ORIGIN_STEP,
  DESTINATION_STEP,
  USE_AI_STEP,
  TRAVEL_TYPE_STEP,
  INTERESTS_STEP,
}

@Component({
  selector: 'app-trips-create-steps',
  templateUrl: './trips-create-steps.component.html',
  styleUrls: ['./trips-create-steps.component.scss'],
  animations:[
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('200ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('100ms', style({ opacity: 0 }))
      ]),
    ]),
  ]
})
export class TripsCreateStepsComponent {

  protected isAITrip: boolean | null = null;
  protected TRIPS_CREATE_STEPS: typeof TRIPS_CREATE_STEPS = TRIPS_CREATE_STEPS;
  protected tripCreateStep : TRIPS_CREATE_STEPS = TRIPS_CREATE_STEPS.USE_AI_STEP;
  protected loading = true;

  imgs = new Array();

  constructor(private router:Router, private tripsCreateStepsService:TripsCreateStepsService){

    this.pload(
      "/assets/images/trips/create-steps/sky-night.png",
      "/assets/images/trips/create-steps/day.png");


    setTimeout(()=>{
      this.loading = false;
    },2000);
  }

  protected close(){
    this.tripsCreateStepsService.close();
  }

  createTrip(){
    this.loading = true;
    setTimeout(()=>{
      this.router.navigate(['trip/create', '123123313']);
    },2000);
  }

  private pload(...args: any[]):void {
    for (var i = 0; i < args.length; i++) {
      this.imgs[i] = new Image();
      this.imgs[i].src = args[i];
      console.log('loaded: ' + args[i]);
    }
  }
}
