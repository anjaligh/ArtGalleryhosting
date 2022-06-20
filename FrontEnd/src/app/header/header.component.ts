import { Component, OnInit } from '@angular/core';
import { AuthservicesService } from '../services/authservices.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public auth:AuthservicesService,private routes:Router) { }

  ngOnInit(): void {
  }
  logOut(){
localStorage.removeItem('token')
localStorage.removeItem('userrole')
localStorage.removeItem('username')
this.routes.navigate(['/'])
  }
  
}
