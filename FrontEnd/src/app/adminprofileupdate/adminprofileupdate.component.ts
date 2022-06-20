import { Component, OnInit } from '@angular/core';
import { AuthservicesService } from '../services/authservices.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-adminprofileupdate',
  templateUrl: './adminprofileupdate.component.html',
  styleUrls: ['./adminprofileupdate.component.css']
})
export class AdminprofileupdateComponent implements OnInit {
  profileItem= {
    profileId:'',
    name :'',
    email:'',
    userrole:'',
    contactno:'',
    address:''}
  constructor(private adminprofileservice: AuthservicesService,private router:Router ) { }

  ngOnInit(): void {
    let profileId = localStorage.getItem("editProductId");
    console.log(profileId)
    this.adminprofileservice.getProfile(profileId).subscribe((data)=>{
      this.profileItem=JSON.parse(JSON.stringify(data));
    
      console.log(this.profileItem)
  })
}
  editProduct()
  {    
    this.adminprofileservice.editProduct(this.profileItem);
    alert("Success");
    this.router.navigate(['/admin/adminprofile']);
  }

}
