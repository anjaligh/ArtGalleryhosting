import { Component, OnInit } from '@angular/core';
import { BackendDataService } from '../services/backend-data.service';
import  {ArtModel} from '../services/ArtModel'

@Component({
  selector: 'app-watercolor',
  templateUrl: './watercolor.component.html',
  styleUrls: ['./watercolor.component.css']
})
export class WatercolorComponent implements OnInit {
  watercolor:ArtModel[]=[]
  constructor(private bdata:BackendDataService) { }

  ngOnInit(): void {
    this.bdata.getWatercolor().subscribe((data)=>{
      this.watercolor=JSON.parse(JSON.stringify(data));
      console.log(this.watercolor)
  })
}
}
