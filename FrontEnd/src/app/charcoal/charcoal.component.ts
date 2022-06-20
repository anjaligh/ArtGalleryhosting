import { Component, OnInit } from '@angular/core';
import { BackendDataService } from '../services/backend-data.service';
import  {ArtModel} from '../services/ArtModel'


@Component({
  selector: 'app-charcoal',
  templateUrl: './charcoal.component.html',
  styleUrls: ['./charcoal.component.css']
})
export class CharcoalComponent implements OnInit {
  charcoal:ArtModel[]=[]
  constructor(private bdata:BackendDataService) { }

  ngOnInit(): void {
    this.bdata.getCharcoal().subscribe((data)=>{
      this.charcoal=JSON.parse(JSON.stringify(data));
      console.log(this.charcoal)
  })
}
}
