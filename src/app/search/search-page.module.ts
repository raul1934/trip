import { NgModule } from '@angular/core';
import { CommonModule, TitleCasePipe } from '@angular/common';

import { SearchPageRoutingModule } from './search-page-routing.module';
import { HeaderModule } from '../shared/components/header/header.module';
import { SearchPageComponent } from './search-page.component';
import { TripCardModule } from '../shared/components/trip-card/trip-card.module';

@NgModule({
  declarations: [SearchPageComponent],
  imports: [
    CommonModule,
    SearchPageRoutingModule,
    HeaderModule,
    TripCardModule,
    TitleCasePipe
  ]
})
export class SearchPageModule { }
