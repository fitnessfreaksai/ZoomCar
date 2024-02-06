import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit  {

  popularCars : any[] = [];
  locations : any[] = [];
  fromLocation : string = '';
  toLocation : string = '';
  reviewObj = {
      "carRatingId": 0,
      "carId": 0,
      "bookingId": 0,
      "rating": 0,
      "reviewTitle": "string",
      "review": "string"
  }
  constructor(private carSrv : CarService, private router : Router){

  }
  ngOnInit(): void {
    this.getAllCars();
    this.getAllLocations();
  }
  getAllCars(){
    this.carSrv.GetAllCars().subscribe((res:any)=>{
      this.popularCars = res.data;
    })
  }
  getAllLocations(){
    this.carSrv.GetAllLocations().subscribe((res:any)=>{
      this.locations = res.data;
    })
  }
  navigateToSearchPage(){
    this.router.navigate(['/search',this.fromLocation])
  }
  // addReview(){
  //   this.carSrv.AddReview(this.reviewObj).subscribe((res:any)=>{
  //   })
  // }

}
