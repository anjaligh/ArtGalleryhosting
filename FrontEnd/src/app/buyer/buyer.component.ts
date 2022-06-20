import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buyer',
  templateUrl: './buyer.component.html',
  styleUrls: ['./buyer.component.css']
})
export class BuyerComponent implements OnInit {
  username= localStorage.getItem('username')
  constructor() { }

  ngOnInit(): void {
    
  }

}