import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendDataService {

  constructor(public http: HttpClient) { }
  server_address:String='http://localhost:3000'
  getMural() {
    // return this.http.get('http://localhost:3000/mural')
    return this.http.get(`${this.server_address}/mural`)
  }
  getAbstract() {
    // return this.http.get('http://localhost:3000/abstract')
    return this.http.get(`${this.server_address}/abstract`)
  }
  getWatercolor() {
    // return this.http.get('http://localhost:3000/watercolor')
    return this.http.get(`${this.server_address}/watercolor`)
  }
  getPastel() {
    // return this.http.get('http://localhost:3000/pastel')
    return this.http.get(`${this.server_address}/pastel`)
  }
  getCharcoal() {
    // return this.http.get('http://localhost:3000/charcoal')
    return this.http.get(`${this.server_address}/charcoal`)
  }
  getAcrylic() {
    // return this.http.get('http://localhost:3000/acrylic')
    return this.http.get(`${this.server_address}/acrylic`)
  }
  addPainting(data: any){
    console.log("addpaintingpost"+data);
    // return this.http.post<any>('http://localhost:3000/addwork',data)
    return this.http.post<any>(`${this.server_address}/addwork`,data)
  }
  addCart(cartDetails:any){
    console.log("cartdatapost:"+cartDetails);
    // return this.http.post<any>('http://localhost:3000/addcart',cartDetails)
    return this.http.post<any>(`${this.server_address}/addcart`,cartDetails)
  }
  addOrders(orderDetails:any){
    console.log("cartdatapost:"+orderDetails);
    // return this.http.post<any>('http://localhost:3000/addorders',orderDetails)
    return this.http.post<any>(`${this.server_address}/addorders`,orderDetails)
  }
  getMypaintings(usermail:any){
    // return this.http.get('http://localhost:3000/getMyPaintings/'+usermail)
    return this.http.get(`${this.server_address}/getMyPaintings/`+usermail)
  }
// <<<<<<< adminCheck-branch
//   getMyCart(idValue: string){
//     return this.http.get('http://localhost:3000/mycart/'+idValue)
// =======
  getMyCart(usermail:any){
    // return this.http.get('http://localhost:3000/getMyCart/'+usermail)
    return this.http.get(`${this.server_address}/getMyCart/`+usermail)
  }
  getMyOrder(usermail:any){
    // return this.http.get('http://localhost:3000/getMyOrders/'+usermail)
    return this.http.get(`${this.server_address}/getMyOrders/`+usermail)
  }
  getuserProfile(usermail:any){
    console.log("usermailService "+usermail);
    // return this.http.get('http://localhost:3000/getuserprofile/'+usermail)
    return this.http.get(`${this.server_address}/getuserprofile/`+usermail)
  }
  deleteCart(usermail:any){
    // return this.http.get('http://localhost:3000/deletemycart/'+usermail)
    return this.http.get(`${this.server_address}/deletemycart/`+usermail)

  }
  deletePainting(paintingname1:any){
    // return this.http.get('http://localhost:3000/deletePainting/'+paintingname1)
    return this.http.get(`${this.server_address}/deletePainting/`+paintingname1)
    
  }
}
