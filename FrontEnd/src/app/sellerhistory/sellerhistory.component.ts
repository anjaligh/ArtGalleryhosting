import { Component, OnInit } from '@angular/core';
import  {ArtModel} from '../services/ArtModel';
import { BackendDataService } from '../services/backend-data.service';

@Component({
  selector: 'app-sellerhistory',
  templateUrl: './sellerhistory.component.html',
  styleUrls: ['./sellerhistory.component.css']
})
export class SellerhistoryComponent implements OnInit {
  myWorks:ArtModel[]=[]
  usermail:any;
  constructor(private bdata:BackendDataService) { }

  ngOnInit(): void {
    let usermail= localStorage.getItem('usermail')
    console.log(usermail)
    this.bdata.getMypaintings(usermail).subscribe((data)=>{
      console.log("my paintings");
      console.log(data);
      this.myWorks=JSON.parse(JSON.stringify(data));
      console.log("myWorks");
      console.log(this.myWorks)
  })
}

}
