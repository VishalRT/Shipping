import { Injectable } from '@angular/core';
import { Headers ,Http} from '@angular/http';
import {Response} from '@angular/http/src/static_response';
import {Observable} from 'rxjs';
import 'rxjs/rx';
import { Order } from '../Classes/usertab';
import {ContactUs} from '../Classes/usertab';
import { Router } from '@angular/router';




@Injectable({
  providedIn: 'root'
})

export class UserService {

  private currentOrder : Order ;
  url:string="http://localhost:5000/";
  headerDict = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Headers': 'Content-Type',
  }

  constructor(private http :Http , public router:Router) { }

    //add a new order
    addOrder(order  : Order ) : Observable<any>
    {
        //console.log(order);
        return this.http.post(this.url+"addOrder/" , JSON.stringify(order) , { headers : new Headers(this.headerDict) }).map((response:any)=>response);;

    }

    //to show User profile
    getUser(mobileNo) : Observable<any>
    {
      return this.http.post(this.url+"showDetails/user" , JSON.stringify(mobileNo) , { headers : new Headers(this.headerDict) }).map((response:any)=>response);
    }

    contactUs(contact:ContactUs):string
    {
        console.log(contact);
        return "Thanks for Reaching Us.. we will contact you soon..";
    }

// getter and setter for OrderDetails page
  setOrderDetail(currentOrder : Order )
  {
     //console.log(currentOrder);
     this.currentOrder = currentOrder;
  }

  getOrderDetail() : Order
  {
    return this.currentOrder ;
  }
  
  

}
