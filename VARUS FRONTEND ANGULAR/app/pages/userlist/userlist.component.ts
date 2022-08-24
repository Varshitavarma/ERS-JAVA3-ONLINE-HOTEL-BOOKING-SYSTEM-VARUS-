import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { RegisterService } from 'src/app/services/register.service';
import { User } from 'src/app/user';
 
@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  users: Observable<User[]> | undefined;
 
  constructor(private registerService: RegisterService,
    private router: Router) {}
 
  ngOnInit() {
    this.reloadData();
  }
 
  reloadData() {
    this.users = this.registerService.getUserList();
  }
 
  deleteUser(email: string) {
    this.registerService.deleteUser(email)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }
 
  userDetails(email: string){
    this.router.navigate(['details', email]);
  }
 
  updateUser(email: string){
    this.router.navigate(['update', email]);
  }
}