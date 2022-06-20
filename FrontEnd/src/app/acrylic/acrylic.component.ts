import { Component, OnInit } from '@angular/core';
import { BackendDataService } from '../services/backend-data.service';
import  {ArtModel} from '../services/ArtModel'
@Component({
  selector: 'app-acrylic',
  templateUrl: './acrylic.component.html',
  styleUrls: ['./acrylic.component.css']
})
export class AcrylicComponent implements OnInit {

  acrylic:ArtModel[]=[]
  constructor(private bdata:BackendDataService) { }

  ngOnInit(): void {
    this.bdata.getAcrylic().subscribe((data)=>{
      this.acrylic=JSON.parse(JSON.stringify(data));
      console.log(this.acrylic)
  })
}
}
