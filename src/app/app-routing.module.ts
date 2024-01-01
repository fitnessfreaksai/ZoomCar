import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CarsComponent } from './components/cars/cars.component';
import { BookingComponent } from './components/booking/booking.component';
import { SearchComponent } from './components/search/search.component';
import { MyBookingsComponent } from './components/my-bookings/my-bookings.component';

const routes: Routes = [
  {
    path : '',
    redirectTo : 'Home',
    pathMatch : 'full'
  },
  {
    path : 'Home',
    component : HomeComponent 
  },
  {
    path : 'Cars',
    component : CarsComponent 
  },
  {
    path : 'Booking/:locationId/:carId',
    component : BookingComponent 
  },
  {
    path : 'search/:locationId',
    component : SearchComponent 
  },
  {
    path : 'myBookings',
    component : MyBookingsComponent 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
