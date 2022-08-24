import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RegisterService } from 'src/app/services/register.service';
import { User } from 'src/app/user';
 
@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent implements OnInit {
 
  email!: string;
  user!: User;
 
  constructor(private route: ActivatedRoute,private router: Router,
    private registerService: RegisterService) { }
 
  ngOnInit() {
    this.user = new User();
 
    this.email = this.route.snapshot.params['email'];
    
    this.registerService.getUser(this.email)
      .subscribe(data => {
        console.log(data)
        this.user = data;
      }, error => console.log(error));
  }
 
  updateUser() {
    this.registerService.updateUser(this.email, this.user)
      .subscribe(data => {
        console.log(data);
        this.user = new User();
        this.gotoList();
      }, error => console.log(error));
  }
 
  onSubmit() {
    this.updateUser();    
  }
 
  gotoList() {
    this.router.navigate(['/users']);
  }
}