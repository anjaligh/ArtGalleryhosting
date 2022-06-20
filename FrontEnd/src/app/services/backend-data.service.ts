import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendDataService {

  constructor(public http: HttpClient) { }
  // server
  getMural() {
    // return this.http.get('http://localhost:3000/mural')
    return this.http.get('api/mural')
  }
  getAbstract() {
    // return this.http.get('http://localhost:3000/abstract')
    return this.http.get('api/abstract')
  }
  getWatercolor() {
    // return this.http.get('http://localhost:3000/watercolor')
    return this.http.get('api/watercolor')
  }
  getPastel() {
    // return this.http.get('http://localhost:3000/pastel')
    return this.http.get('api/pastel')
  }
  getCharcoal() {
    // return this.http.get('http://localhost:3000/charcoal')
    return this.http.get('api/charcoal')
  }
  getAcrylic() {
    // return this.http.get('http://localhost:3000/acrylic')
    return this.http.get('api/acrylic')
  }
  addPainting(data: any){
    console.log("addpaintingpost"+data);
    // return this.http.post<any>('http://localhost:3000/addwork',data)
    return this.http.post<any>('api/addwork',data)
  }
  addCart(cartDetails:any){
    console.log("cartdatapost:"+cartDetails);
    // return this.http.post<any>('http://localhost:3000/addcart',cartDetails)
    return this.http.post<any>('api/addcart',cartDetails)
  }
  addOrders(orderDetails:any){
    console.log("cartdatapost:"+orderDetails);
    // return this.http.post<any>('http://localhost:3000/addorders',orderDetails)
    return this.http.post<any>('api/addorders',orderDetails)
  }
  getMypaintings(usermail:any){
    // return this.http.get('http://localhost:3000/getMyPaintings/'+usermail)
    return this.http.get('api/getMyPaintings/'+usermail)
  }
// <<<<<<< adminCheck-branch
//   getMyCart(idValue: string){
//     return this.http.get('http://localhost:3000/mycart/'+idValue)
// =======
  getMyCart(usermail:any){
    // return this.http.get('http://localhost:3000/getMyCart/'+usermail)
    return this.http.get('api/getMyCart/'+usermail)
  }
  getMyOrder(usermail:any){
    // return this.http.get('http://localhost:3000/getMyOrders/'+usermail)
    return this.http.get('api/getMyOrders/'+usermail)
  }
  getuserProfile(usermail:any){
    console.log("usermailService "+usermail);
    // return this.http.get('http://localhost:3000/getuserprofile/'+usermail)
    return this.http.get('api/getuserprofile/'+usermail)
  }
  deleteCart(usermail:any){
    // return this.http.get('http://localhost:3000/deletemycart/'+usermail)
    return this.http.get('api/deletemycart/'+usermail)

  }
  deletePainting(paintingname1:any){
    // return this.http.get('http://localhost:3000/deletePainting/'+paintingname1)
    return this.http.get('api/deletePainting/'+paintingname1)
    
  }
}
