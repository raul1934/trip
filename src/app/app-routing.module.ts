import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'trip',
    loadChildren: () => import('./trips/trips.module').then(m => m.TripsModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./search/search-page.module').then(m => m.SearchPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top', onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
