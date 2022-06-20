import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent implements OnInit {

  constructor() { }
 username:any= localStorage.getItem('username')
 
  ngOnInit(): void {
    
  }

}
