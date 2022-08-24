import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/services/register.service';
import { User } from 'src/app/user';
 
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  user:User =new User();
 
  constructor(private registerService: RegisterService) { }
 
  ngOnInit(): void {
  }
 
  userRegister(){
    console.log(this.user);
    
    this.registerService.registerUser(this.user).subscribe(data=>{
      alert("User saved successfully")
     },error=>alert("oh no ! Error"));
  }
 
}