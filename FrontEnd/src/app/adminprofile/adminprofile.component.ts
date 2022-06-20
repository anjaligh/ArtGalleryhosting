import { Component, OnInit } from '@angular/core';
import { AuthservicesService } from '../services/authservices.service';
import  {ProfileModel} from '../services/ProfileModel'
import {Router} from '@angular/router'
@Component({
  selector: 'app-adminprofile',
  templateUrl: './adminprofile.component.html',
  styleUrls: ['./adminprofile.component.css']
})
export class AdminprofileComponent implements OnInit {
 profilemodel:ProfileModel[]=[]
//  profile={
//   _id:'',
//   naame:'',
//   email:'',
//   userrole:'',
//   contactno:'',
//   address:'',
//  }
  profiles=[{
  profileId:'',
    name:'',
    email:'',
    userrole:'',
    contactno:'',
    address:'',
   }]
  constructor(private adminprofileservice: AuthservicesService,private router:Router ) { }

  ngOnInit(): void {
    
    this.adminprofileservice.getProfiles().subscribe((data)=>{
      
      console.log(data);
      

      this.profiles=JSON.parse(JSON.stringify(data));
    //const ids=this.profilemodel.map((obj)=>obj._id)
    //  console.log(ids)
      //console.log(this.profilemodel.)
      //console.log(this.profile.name)
      
  })
  }
  editProduct(i:any)
  {
    localStorage.setItem("editProductId", i._id.toString())
    
   // let profileId = localStorage.getItem("editProductId");
    this.router.navigate(['/adminprofileupdate']);

  }
  deleteProduct(i:any)
  {
    this.adminprofileservice.deleteProduct(i._id)
 
      .subscribe((data) => {
        alert("Deleted Successfully");
        this.profiles= this.profiles.filter(p => p !== i)
    
        //console.log(profile.email);

  })
  window.location.reload();
}


}