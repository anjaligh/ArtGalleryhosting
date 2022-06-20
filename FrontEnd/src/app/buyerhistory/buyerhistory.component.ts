import { Component, OnInit } from '@angular/core';
import { BackendDataService } from '../services/backend-data.service';
import { MyCartModel } from '../services/MyCartModel';

@Component({
  selector: 'app-buyerhistory',
  templateUrl: './buyerhistory.component.html',
  styleUrls: ['./buyerhistory.component.css']
})
export class BuyerhistoryComponent implements OnInit {
  myOrder:MyCartModel[]=[]
  constructor(private bdata:BackendDataService) { }

  ngOnInit(): void {
    var usermail=localStorage.getItem('usermail')
  this.bdata.getMyOrder(usermail).subscribe((data)=>{
    this.myOrder=JSON.parse(JSON.stringify(data));
    console.log("myorder:"+this.myOrder)
})
  }

}
