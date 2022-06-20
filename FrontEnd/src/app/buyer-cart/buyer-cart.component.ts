import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BackendDataService } from '../services/backend-data.service';

//import  {ArtModel} from '../services/ArtModel';
import { MyCartModel } from '../services/MyCartModel';
import { Router } from '@angular/router';


@Component({
  selector: 'app-buyer-cart',
  templateUrl: './buyer-cart.component.html',
  styleUrls: ['./buyer-cart.component.css']
})
export class BuyerCartComponent implements OnInit {
// <<<<<<< adminCheck-branch
//   myCart:ArtModel[]=[]
//   constructor(private _Activatedroute:ActivatedRoute, private bdata:BackendDataService) { }
//   purchased:any=false;
//   idarray: string[] = [];
//   namearray: string[] = []; 
//   pricearray: string[] = [];
//   imagearray: string[] = [];
//   myCart2: object[] = [];
// =======
  myCart:MyCartModel[]=[]
  constructor(private _Activatedroute:ActivatedRoute,private bdata:BackendDataService, private router:Router) { }
  purchased:any=false;

  id: any;
  name1:any;
  // : [] = [];
  name:any;
  price:any; 
  artist:any;
  dimension:any;
  category:any;
  image:any;
  

  ngOnInit(): void {
    this._Activatedroute.paramMap.subscribe(params => { 
      this.id = params.get('id'); 
      this.name = params.get('name'); 
      this.price = params.get('price');
      this.artist = params.get('artist');  
      this.dimension = params.get('dimension'); 
      this.category=params.get('category');
      this.image=params.get('image');
      // console.log(this.id)
      
  });

  var usermail=localStorage.getItem('usermail')
  this.bdata.getMyCart(usermail).subscribe((data)=>{
    this.myCart=JSON.parse(JSON.stringify(data));
    console.log("mycart:"+this.myCart)
})

  }

toOrders(paintingname1:any,price1:any,dimension1:any,category1:any,image1:any){
    var usermail=localStorage.getItem('usermail')
      const orderDetails={
        buyeremail:usermail,
        price:price1,
        dimension:dimension1,
        category:category1,
        paintingname:paintingname1,
        image : image1
      }
      console.log(orderDetails);
      this.bdata.addOrders(orderDetails).subscribe(data=>{
        console.log(data)
      })
      this.bdata.deleteCart(usermail).subscribe(data=>{
        console.log(data)
      })
      this.bdata.deletePainting(paintingname1).subscribe(data=>{
        console.log(data)
      })
      alert(`Item Purchased!  Check "My Orders" `);
  this.purchased=true;
  this.router.navigate(['/buyer/border'])
}
}
