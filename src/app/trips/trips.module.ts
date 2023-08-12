import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TripsComponent } from './trips.component';
import { HeaderModule } from '../shared/components/header/header.module';
import { TripsRoutingModule } from './trips-routing.module';
import { GoogleMapsModule } from '@angular/google-maps';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { DragScrollModule } from 'ngx-drag-scroll';
import { LocationComponent } from './components/location/location.component';
import { FlightComponent } from './components/flight/flight.component';
import { AirBnbComponent } from './components/air-bnb/air-bnb.component';
import { NavLocationComponent } from './components/nav-location/nav-location.component';
import { ObserveVisibilityModule } from '../shared/directives/observe-visibility/observe-visibility.module';
import { FlightInfoComponent } from './components/flight-info/flight-info.component';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';
import { TripInfoComponent } from './components/trip-info/trip-info.component';
import { LocationInfoComponent } from './components/location-info/location-info.component';
import { AirBnbInfoComponent } from './components/air-bnb-info/air-bnb-info.component';
import { GaleryComponent } from './components/galery/galery.component';
import { MapModule } from '../shared/components/map/map.module';

import { ScrollGalleryModule } from '../shared/components/scroll-gallery/scroll-gallery.module';
import { TripsViewComponent } from './show/trips-view.component';
import { TripsCreateComponent } from './create/trips-store.component';
import { TripsCreateStepsComponent } from './trips-create-steps/trips-create-steps.component';
import { SearchComponent } from './trips-create-steps/components/search/search.component';
import { DateComponent } from './trips-create-steps/components/date/date.component';

@NgModule({
  declarations: [
    TripsComponent,
    TripsCreateComponent,
    LocationComponent,
    FlightComponent,
    AirBnbComponent,
    NavLocationComponent,
    FlightInfoComponent,
    TripInfoComponent,
    LocationInfoComponent,
    AirBnbInfoComponent,
    GaleryComponent,
    TripsViewComponent,
    TripsCreateStepsComponent,
    SearchComponent,
    DateComponent
  ],
  imports: [
    CommonModule,
    TripsRoutingModule,
    HeaderModule,
    GoogleMapsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    DragScrollModule,
    ObserveVisibilityModule,
    NgxQRCodeModule,
    MapModule,
    ScrollGalleryModule
  ]
})
export class TripsModule { }
