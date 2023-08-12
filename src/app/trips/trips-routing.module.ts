import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoogleMapsModule } from '@angular/google-maps'


import { TripsViewComponent } from './show/trips-view.component';
import { TripsCreateComponent } from './create/trips-store.component';
import { TripsCreateStepsComponent } from './trips-create-steps/trips-create-steps.component';

const routes: Routes = [
  { path: 'view/:id', component: TripsViewComponent },
  { path: 'create/:id', component: TripsCreateComponent },
  { path: 'create', component: TripsCreateStepsComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    GoogleMapsModule
  ],
  exports: [RouterModule]
})
export class TripsRoutingModule { }
