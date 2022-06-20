import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthservicesService {
  profile={
    _id:'',
    naame:'',
    email:'',
    userrole:'',
    contactno:'',
    address:''
   }
  constructor(private http:HttpClient) { }
  registerData(data:any) :Observable<any>{

    //console.log("data from Service file" , data)

    return this.http.post<any>("http://localhost:3000/users/register", data)
  }
  loginData(data:any):Observable<any>{
  
    console.log("data from Service file" , data)
   
    return this.http.post<any>("http://localhost:3000/users/login",data)
  }
  getProfiles() {
    return this.http.get('http://localhost:3000/users/profile')
  }
  getProfile(id:any) {
    return this.http.get('http://localhost:3000/users/'+id)
  }
  getSeller():Observable<any>{
    let headers={
      'Authorization':"CheckUsers"+localStorage.getItem('token')
    }
    return this.http.get("http://localhost:3000/users/seller",{headers:headers})

  }
  loggedIn()
  {
    return !!localStorage.getItem('token')
  
  }
  getToken(){
    return localStorage.getItem('token')
  }
  adminCheck(){
    var user=localStorage.getItem('userrole')
    if(user=="Admin"){
      return true;
    }
    else {
      return false
    }
  }
  buyerCheck(){
    var user=localStorage.getItem('userrole')
    if(user=="Buyer"){
      return true;
    }
    else {
      return false
    }
  }
  sellerCheck(){
    var user=localStorage.getItem('userrole')
    if(user=="Seller"){
      return true;
    }
    else {
      return false
    }

    
  }
  deleteProduct(id:any)
  {
  
    return this.http.delete("http://localhost:3000/users/remove/"+id)

  }
  editProduct(profile:any)
  {
    console.log('client update')
    return this.http.put("http://localhost:3000/users/update",profile)
    .subscribe(data =>{console.log(data)})

  }
 
}
