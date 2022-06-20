import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,FormControl,Validators } from '@angular/forms';
import { CustomvalidatorsService } from '../services/customvalidators.service';
import { AuthservicesService } from '../services/authservices.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  submitted = false;
 

  constructor(private fb:FormBuilder,private customValidator: CustomvalidatorsService,private logservice:AuthservicesService,private router:Router ){}

//   constructor(private fb:FormBuilder,private customValidator: CustomvalidatorsService,private _router:Router){}

  loginForm=new FormGroup({
   
      email1:new FormControl('',[Validators.required, Validators.email]),
      password:new FormControl('',[Validators.required,Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/)])
    })
 

 
  
  ngOnInit(): void {
  }
  onLogin() {
    this.submitted = true;
    let data=this.loginForm.value;
    //if (this.loginForm.valid) {
     // alert('Form Submitted succesfully!!!\n Check the values in browser console.');
      //console.table(this.loginForm.value);
      this.logservice.loginData(data) .subscribe(
        
        res=>{
          if(res.success){
            localStorage.setItem('token',res.token)
            localStorage.setItem('userrole',res.userrole)
            localStorage.setItem('usermail',res.useremail)

            localStorage.setItem('username',res.username)


            if(res.userrole=="Admin")
            {
            this.router.navigate(['admin/adminprofile']);
            alert(res.message);

            localStorage.setItem('username',res.username)
            }
            else if(res.userrole=="Seller")
            {
            this.router.navigate(['/seller/profile']);
            alert(res.message);
            }
            else if(res.userrole=="Buyer")
            {
              this.router.navigate(['/buyer/bprofile'])
              alert(res.message);
            }
          }
else{
  alert(res.message)
}
        },
        err=>{
          alert("Login Failed")
        }
        //console.log(data, "from backend")
      )
    
    // if (this.loginForm.valid) {
    //   alert('Form Submitted succesfully!!!\n Check the values in browser console.');
    //   console.table(this.loginForm.value);
    //   this.router.navigate(['login/seller/profile'])


      
    // }
  }
  

  /*submit(){
   
  
  
    let data =this.loginForm.value;
    if(this.loginForm.valid){
    alert("Login Successful")
  }
  else
  {
     alert("Login Failed")
  }
    console.log("hai")
    //console.log(this.email);
    //console.log(this.password);
    console.log("form data ts file",data)

 }*/
 
}
