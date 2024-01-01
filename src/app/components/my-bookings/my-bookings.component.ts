import { Component, OnInit, numberAttribute, } from '@angular/core';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-my-bookings',
  templateUrl: './my-bookings.component.html',
  styleUrls: ['./my-bookings.component.css']
})
export class MyBookingsComponent implements OnInit {
  loggedUserObj : any;
  bookedCars : any;
  constructor(private carSrv : CarService){
    const local = localStorage.getItem('zoomUser');
    if(local != null){
      this.loggedUserObj = JSON.parse(local);
    }
  }
  ngOnInit(): void {
    this.getAllBookedCars();
  }
  getAllBookedCars(){
    this.carSrv.GetAllBookingsByCustomerId(this.loggedUserObj.userId).subscribe((res:any)=>{
      this.bookedCars = res.data;
    })
  }
}
