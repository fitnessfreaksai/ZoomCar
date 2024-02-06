import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiEndPoint : string = 'https://freeapi.gerasim.in/api/ZoomCar/';
  constructor(private http : HttpClient) { }

  registerUser(obj:any){
    return this.http.post(this.apiEndPoint + 'AddNewUser' ,obj);
  }
  loginUser(obj:any){
    return this.http.post(this.apiEndPoint + 'Login' ,obj);
  }
  addNewCar(obj:any){
    return this.http.post(this.apiEndPoint + 'addNewCar',obj)
  }
  GetAllCarsByOwnerId(userId : string){
    return this.http.get(this.apiEndPoint + "GetAllCarsByOwnerId?id=" + userId)
  }
  GetAllLocations(){
    return this.http.get(this.apiEndPoint + 'GetAllLocations')
  }
  GetAllCars(){
    return this.http.get(this.apiEndPoint + 'GetAllCars')
  }
  GetAllCarsByLocation(locationId:string){
    return this.http.get(this.apiEndPoint + 'GetAllCarsByLocation?id=' + locationId)
  }
  GetCarById(carId:string){
    return this.http.get(this.apiEndPoint + 'GetCarById?id=' + carId)
  }
  createNewBooking(obj:any){
    return this.http.post(this.apiEndPoint + 'createNewBooking',obj)
  }
  GetAllBookingsByCustomerId(custId : number){
    return this.http.get(this.apiEndPoint + 'GetAllBookingsByCustomerId?customerid=' + custId)
  }
  // AddReview(obj:any){
  //   return this.http.post(this.apiEndPoint + 'AddReview', obj)
  // }
  // GetReviewByCarId(carId : string){
  //   return this.http.get(this.apiEndPoint + 'GetAllReviewByCarId?carid=' + carId)
  // }
}
