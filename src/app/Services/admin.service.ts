import { Injectable } from '@angular/core';
import { Employee } from '../Classes/admintab';
import { Headers, Http } from '@angular/http';
import { Observable } from 'rxjs';
import { Connectivity } from '../Classes/Connectivity';

@Injectable({
  providedIn: 'root'
})
export class AdminService 
{

  constructor(private http: Http) { }

  url: string = Connectivity.getUrl() ;
  headerDict = Connectivity.getHeaders();

  //Admin Profile
  getAdmin(mobileNo): Observable<any> 
  {
    return this.http.post(this.url + "showDetails/admin", JSON.stringify(mobileNo), {headers: new Headers(this.headerDict)} ).map((response: any) => response);
  }

  //Change the approval state of order
  changeApproval(data): Observable<any> 
  {
    return this.http.post(this.url + "approval/", JSON.stringify(data), {headers: new Headers(this.headerDict)} ).map((response: any) => response);
  }

  //delete user 
  removeUser(data): Observable<any> 
  {
    return this.http.delete(this.url + "remove/user/" + data["deleteId"]).map((response: any) => response.json())
  }


  //add Admin
  postEmp(emp: Employee): Observable<any> 
  {
    return this.http.post(this.url + "signUp/admin/", JSON.stringify(emp), {headers: new Headers(this.headerDict)} ).map((response: any) => response);
  }

}
