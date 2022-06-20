import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { AuthservicesService } from '../services/authservices.service';
import { BackendDataService } from '../services/backend-data.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  slides = [
    { img: 'https://via.placeholder.com/600.png/09f/fff' },
    { img: 'https://via.placeholder.com/600.png/021/fff' },
    { img: 'https://via.placeholder.com/600.png/321/fff' },
    { img: 'https://via.placeholder.com/600.png/422/fff' },
    { img: 'https://via.placeholder.com/600.png/654/fff' },
  ];
  slideConfig = { slidesToShow: 4, slidesToScroll: 4 };
  addSlide() {
    this.slides.push({ img: 'http://placehold.it/350x150/777777' });
  }
  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }
  slickInit(e: any) {
    console.log('slick initialized');
  }
  breakpoint(e: any) {
    console.log('breakpoint');
  }
  afterChange(e: any) {
    console.log('afterChange');
  }
  beforeChange(e: any) {
    console.log('beforeChange');
  }
  constructor(private _Activatedroute:ActivatedRoute, private router:Router,public auth:AuthservicesService, private backendData:BackendDataService) {}
   id: any;
   name:any;
   price:any;
   artist:any;
   dimension:any;
   category:any;
   image:any;
   description:any;
  
  ngOnInit(): void {
    this._Activatedroute.paramMap.subscribe(params => { 
      this.id = params.get('id'); 
      this.name = params.get('name'); 
      this.price = params.get('price');
      this.artist = params.get('artist');  
      this.dimension = params.get('dimension'); 
      this.category=params.get('category');
      this.image=params.get('image');
      this.description=params.get('description');
      console.log(this.id)
  });
  }
  toCart(){
    var user=localStorage.getItem('userrole')
    console.log("userroleee:"+user);
    var usermail=localStorage.getItem('usermail')
    if(user=="Buyer"){
      const cartDetails={
        buyeremail:usermail,
        price:this.price,
        dimension:this.dimension,
        category:this.category,
        paintingname:this.name,
        image : this.image
      }
      console.log(cartDetails);
      this.backendData.addCart(cartDetails).subscribe(data=>{
        console.log(data)
      }) 
      this.router.navigate(['/buyer/bcart',this.id,this.name,this.price,this.dimension,this.category,this.artist,this.image]);
    }
    else if(user=="Seller"){
      this.router.navigate(['/seller/cart',this.id,this.name,this.price,this.dimension,this.category,this.artist,this.image]);
    }
    else if(user=="Admin"){
      this.router.navigate(['/admin/acart',this.id,this.name,this.price,this.dimension,this.category,this.artist,this.image]);
    }
    
  }
}

  
