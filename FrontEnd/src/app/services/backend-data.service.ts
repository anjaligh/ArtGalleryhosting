import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendDataService {

  constructor(public http: HttpClient) { }
  getMural() {
    return this.http.get('http://localhost:3000/mural')
  }
  getAbstract() {
    return this.http.get('http://localhost:3000/abstract')
  }
  getWatercolor() {
    return this.http.get('http://localhost:3000/watercolor')
  }
  getPastel() {
    return this.http.get('http://localhost:3000/pastel')
  }
  getCharcoal() {
    return this.http.get('http://localhost:3000/charcoal')
  }
  getAcrylic() {
    return this.http.get('http://localhost:3000/acrylic')
  }
  addPainting(data: any){
    console.log("addpaintingpost"+data);
    return this.http.post<any>('http://localhost:3000/addwork',data)
  }
  addCart(cartDetails:any){
    console.log("cartdatapost:"+cartDetails);
    return this.http.post<any>('http://localhost:3000/addcart',cartDetails)
  }
  addOrders(orderDetails:any){
    console.log("cartdatapost:"+orderDetails);
    return this.http.post<any>('http://localhost:3000/addorders',orderDetails)
  }
  getMypaintings(usermail:any){
    return this.http.get('http://localhost:3000/getMyPaintings/'+usermail)
  }
// <<<<<<< adminCheck-branch
//   getMyCart(idValue: string){
//     return this.http.get('http://localhost:3000/mycart/'+idValue)
// =======
  getMyCart(usermail:any){
    return this.http.get('http://localhost:3000/getMyCart/'+usermail)
  }
  getMyOrder(usermail:any){
    return this.http.get('http://localhost:3000/getMyOrders/'+usermail)
  }
  getuserProfile(usermail:any){
    console.log("usermailService "+usermail);
    return this.http.get('http://localhost:3000/getuserprofile/'+usermail)
  }
  deleteCart(usermail:any){
    return this.http.get('http://localhost:3000/deletemycart/'+usermail)

  }
  deletePainting(paintingname1:any){
    return this.http.get('http://localhost:3000/deletePainting/'+paintingname1)
  }
}
