import { Component } from '@angular/core';
import { CarService } from './services/car.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'zoomcar';

  registerObj:any = {
    "userId": 0,
    "name": "",
    "userRole": "",
    "emailId": "",
    "mobileNo": "",
    "password": "",
    "createdOn": new Date()
  };
  loginObj:any = {
    "userId": 0,
    "name": "abc",
    "userRole": "abc",
    "emailId": "",
    "mobileNo": "111",
    "password": "",
    "createdOn": new Date()
  };
  loggedUserObj:any;

  constructor(private carsrv : CarService){
    const local = localStorage.getItem('zoomUser');
    if(local != null){
      this.loggedUserObj = JSON.parse(local);
    }
  }
  onRegister(){
    debugger;
    this.carsrv.registerUser(this.registerObj).subscribe((res:any)=>{
      if(res.result){
        alert('registration success');
        this.closeRegister();
        this.loggedUserObj = res.data;
        // this.loggedUserObj = '';
      }else{
        alert(res.message)
      }
    })
  }
  onLogin(){
    this.carsrv.loginUser(this.loginObj).subscribe((res:any)=>{
      if(res.result){
        alert('Login success');
        localStorage.setItem('zoomUser', JSON.stringify(res.data))
        this.loggedUserObj = res.data;
        this.closeLogin();
      }else{
        alert(res.message)
      }
    })
  }
  logOff(){
    localStorage.removeItem('zoomUser');
    this.loggedUserObj = undefined;
  }
  openRegister(){
    const model = document.getElementById('registerModal');
    if(model != null){
      model.style.display = 'block';
    }
  }
  closeRegister(){
    const model = document.getElementById('registerModal');
    if(model != null){
      model.style.display = 'none';
    }
  }
  openLogin(){
    const model = document.getElementById('loginModal');
    if(model != null){
      model.style.display = 'block';
    }
  }
  closeLogin(){
    const model = document.getElementById('loginModal');
    if(model != null){
      model.style.display = 'none';
    }
  }
}
