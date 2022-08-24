import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RegisterService } from 'src/app/services/register.service';
import { User } from 'src/app/user';
 
@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
 
  email!: string;
  user: User | undefined;
 
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
 
  list(){
    this.router.navigate(['users']);
  }
}