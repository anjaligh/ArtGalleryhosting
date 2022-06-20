import { Component, OnInit } from '@angular/core';
import { BackendDataService } from '../services/backend-data.service';
import  {ArtModel} from '../services/ArtModel'

@Component({
  selector: 'app-pastel',
  templateUrl: './pastel.component.html',
  styleUrls: ['./pastel.component.css']
})
export class PastelComponent implements OnInit {
  pastel:ArtModel[]=[]
  constructor(private bdata:BackendDataService) { }

  ngOnInit(): void {
    this.bdata.getPastel().subscribe((data)=>{
      this.pastel=JSON.parse(JSON.stringify(data));
      console.log(this.pastel)
  })
}
}
