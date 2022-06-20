import { Component, OnInit } from '@angular/core';
import { BackendDataService } from '../services/backend-data.service';
import { ProfileModel } from '../services/ProfileModel';

@Component({
  selector: 'app-buyer-profile',
  templateUrl: './buyer-profile.component.html',
  styleUrls: ['./buyer-profile.component.css']
})
export class BuyerProfileComponent implements OnInit {
  myProfile={
    profileId:'',
      name:'',
      email:'',
      userrole:'',
      contactno:'',
      address:'',
     }
  constructor(private bdata:BackendDataService) { }

  ngOnInit(): void {
    var usermail=localStorage.getItem('usermail')
    console.log("usermailFront1"+usermail);
  this.bdata.getuserProfile(usermail).subscribe((data)=>{

    this.myProfile=JSON.parse(JSON.stringify(data));
    console.log("myorder:"+this.myProfile)
})
  }

}
