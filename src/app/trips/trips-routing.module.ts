import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TripsComponent } from './trips.component';
import { GoogleMapsModule } from '@angular/google-maps'

const routes: Routes = [
  { path: ':id', component: TripsComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    GoogleMapsModule
  ],
  exports: [RouterModule]
})
export class TripsRoutingModule { }
