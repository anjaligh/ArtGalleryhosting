import { Component, OnInit } from '@angular/core';
import { BackendDataService } from '../services/backend-data.service';
import  {ArtModel} from '../services/ArtModel'


@Component({
  selector: 'app-mural',
  templateUrl: './mural.component.html',
  styleUrls: ['./mural.component.css']
})
export class MuralComponent implements OnInit {
  mural:ArtModel[]=[]
  constructor(private bdata:BackendDataService) { }

  ngOnInit(): void {
    this.bdata.getMural().subscribe((data)=>{
      console.log("mural");
      console.log(data);
      this.mural=JSON.parse(JSON.stringify(data));
      console.log("mural");
      console.log(this.mural)
  })
}
}
