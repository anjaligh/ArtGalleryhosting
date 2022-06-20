import { Component, OnInit } from '@angular/core';
import { BackendDataService } from '../services/backend-data.service';
import  {ArtModel} from '../services/ArtModel'

@Component({
  selector: 'app-abstract',
  templateUrl: './abstract.component.html',
  styleUrls: ['./abstract.component.css']
})
export class AbstractComponent implements OnInit {
  abstract:ArtModel[]=[]
  constructor(private bdata:BackendDataService) { }

  ngOnInit(): void {
    this.bdata.getAbstract().subscribe((data)=>{
      this.abstract=JSON.parse(JSON.stringify(data));
      console.log(this.abstract)
  })
}
}
