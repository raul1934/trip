import { ApplicationRef, ComponentRef, EmbeddedViewRef, EnvironmentInjector, Injectable, ViewContainerRef, createComponent } from '@angular/core';
import { TripsCreateStepsComponent } from './trips-create-steps.component';

@Injectable({
  providedIn: 'root'
})
export class TripsCreateStepsService {

  tripsCreateStepsComponent: ComponentRef<TripsCreateStepsComponent> | undefined

  constructor(private appRef: ApplicationRef,
             private envInjector: EnvironmentInjector) { }

  public show(){
    this.tripsCreateStepsComponent = createComponent(TripsCreateStepsComponent,{environmentInjector:this.envInjector});
    this.appRef.attachView(this.tripsCreateStepsComponent.hostView);
    const domElem = (this.tripsCreateStepsComponent.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;
      document.body.appendChild(domElem);
  }

  public close(){
    if(this.tripsCreateStepsComponent){
      this.appRef.detachView(this.tripsCreateStepsComponent?.hostView);
      this.tripsCreateStepsComponent?.destroy();
    }
  }
}
