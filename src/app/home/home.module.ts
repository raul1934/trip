import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragScrollModule } from 'ngx-drag-scroll';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { SearchComponent } from './components/search/search.component';
import { TripCardModule } from '../shared/components/trip-card/trip-card.module';
import { StoryCardModule } from '../shared/components/story-card/story-card.module';
import { FooterModule } from '../shared/components/footer/footer.module';
import { HeaderComponent } from './components/header/header.component';
import { ScrollGalleryModule } from '../shared/components/scroll-gallery/scroll-gallery.module';

@NgModule({
  declarations: [
    HomeComponent,
    SearchComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    DragScrollModule,
    TripCardModule,
    StoryCardModule,
    FooterModule,
    ScrollGalleryModule
  ]
})
export class HomeModule { }
