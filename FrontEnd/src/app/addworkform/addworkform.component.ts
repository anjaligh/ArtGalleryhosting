import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,FormBuilder, Validators} from '@angular/forms';
import { BackendDataService } from '../services/backend-data.service';

@Component({
  selector: 'app-addworkform',
  templateUrl: './addworkform.component.html',
  styleUrls: ['./addworkform.component.css']
})
export class AddworkformComponent implements OnInit {

  constructor(private fb:FormBuilder, private backendData:BackendDataService) { }

  addWorkForm=this.fb.group({
    // name:new FormControl('',[Validators.required,Validators.pattern(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/)]),
    email:new FormControl('',[Validators.required,Validators.pattern(/^[a-z0-9.%+]+@[a-z0-9.-]+\.[a-z]{2,4}/)]),
    // contact:new FormControl('',[Validators.required,Validators.pattern(/^([0-9]{3})([-. ]?)([0-9]{3})([-. ]?)([0-9]{4})$/), Validators.maxLength(12)]),
    // address:new FormControl('',[Validators.required]),
    // artistimage:new FormControl(''),
    paintingname: new FormControl('',[Validators.required,Validators.pattern(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/)]),
    category:new FormControl('',[Validators.required]),
    dimension:new FormControl('',[Validators.required]),
    price:new FormControl('',[Validators.required,Validators.pattern(/^[0-9]+$/)]),
    description:new FormControl('',[Validators.required]),
    image:new FormControl('',[Validators.required])
  })

  ngOnInit(): void {
  }
  addWork(){
    console.log(this.addWorkForm.value);  
    let data=this.addWorkForm.value
    this.backendData.addPainting(data).subscribe(data=>{
      console.log(data)
    })  
    alert("Your painting has been added successfully");
    // this.router.navigate(['/paintings']);
  }
}
