import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import{ RestaurantListComponent } from 
                         "./restaurant-list/restaurant-list.component"
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';


const routes: Routes = [
  {path: 'restaurants', component: RestaurantListComponent}, 
  {path: 'restaurants/:id', component: RestaurantDetailComponent},
  {path: '', redirectTo: '/restaurants', pathMatch: 'full'},
  {path: '**', redirectTo: '/restaurants', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
