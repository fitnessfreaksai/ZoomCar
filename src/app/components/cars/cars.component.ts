import { Component, OnInit } from '@angular/core';
import {CarService} from 'src/app/services/car.service'

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  loggedUserObj:any;
  carList:any[]=[];
  locations:any[]=[]
  carAccesoriesObj:any={
    "accessoriesId": 0,
    "accessoriesTitle": "",
    "showOnWebsite": false,
    "carId": 0
  }
  carObj:any = {
    "carId": 0,
    "brand": "",
    "name": "",
    "pricingDescription": "",
    "pricing": 0,
    "locationId": 0,
    "registeredOn": "2023-12-22T14:09:09.609Z",
    "imageUrl": "",
    "vehicleNo": "",
    "ownerUserId": 0,
    "ZoomCarAccessoriess": [
      
    ]
  };

  constructor(private carSrv : CarService){
    const local = localStorage.getItem('zoomUser');
    if(local != null){
      this.loggedUserObj = JSON.parse(local);
    }
  }
  ngOnInit(): void {
    this.getCars();
    this.getAllLocations();
  }
  Add(){
    const obj = JSON.stringify(this.carAccesoriesObj);
    this.carObj.ZoomCarAccessoriess.push(JSON.parse(obj));
    this.carAccesoriesObj ={
      "accessoriesId": 0,
      "accessoriesTitle": "",
      "showOnWebsite": false,
      "carId": 0
    }
  }

  getCars(){
    this.carSrv.GetAllCarsByOwnerId(this.loggedUserObj.userId).subscribe((res:any)=>{
      this.carList = res.data;
    })
  }
  getAllLocations(){
    this.carSrv.GetAllLocations().subscribe((res:any)=>{
      this.locations = res.data;
    })
  }
  close(){
    const model = document.getElementById('newCarModal');
    if(model!=null){
      model.style.display = 'none';
    }
  }
  open(){
    const model = document.getElementById('newCarModal');
    if(model!=null){
      model.style.display = 'block';
    }
  }
  saveCar(){
    this.carObj.ownerUserId = this.loggedUserObj.userId;
    this.carSrv.addNewCar(this.carObj).subscribe((res:any)=>{
      if(res.result){
        alert('car created');
        this.getCars();
        this.close();
        this.carObj = {
          "carId": 0,
          "brand": "",
          "name": "",
          "pricingDescription": "",
          "pricing": 0,
          "locationId": 0,
          "registeredOn": "2023-12-22T14:09:09.609Z",
          "imageUrl": "",
          "vehicleNo": "",
          "ownerUserId": 0,
          "ZoomCarAccessoriess": [
          ]
        };
      }else{
        alert(res.message)
      }
    })
  }
}
