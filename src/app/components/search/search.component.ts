import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  locationId : string = '';
  locations : any [] = [];
  fromLocation : string = '';
  toLocation : string = '';
  availableCars : any[] = [];
  constructor(private activateRoute : ActivatedRoute, private carSrv : CarService, private router : Router){
    this.activateRoute.params.subscribe((res=>{
      this.locationId = res['locationId'];
      this.fromLocation = this.locationId;
      this.getCarsFromLocation();
    }))
  }
  ngOnInit(): void {
    this.getAllLocations()
  }
  getAllLocations(){
    this.carSrv.GetAllLocations().subscribe((res:any)=>{
      this.locations = res.data;
    })
  }
  getCarsFromLocation(){
    this.carSrv.GetAllCarsByLocation(this.locationId).subscribe((res:any)=>{
      this.availableCars = res.data;
    })
  }
  onLocationChange(){
    this.carSrv.GetAllCarsByLocation(this.fromLocation).subscribe((res:any)=>{
      this.availableCars = res.data;
    })
  }
  makeBooking(carId:number){
    this.router.navigate(['/Booking', this.fromLocation, carId])
  }
}
