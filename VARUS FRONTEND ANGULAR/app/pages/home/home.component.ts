import { Component, OnInit } from '@angular/core';
import { bookDetailsService } from 'src/app/services/bookdetails.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service:bookDetailsService) { }
  foodData:any;
  ngOnInit(): void {
    this.foodData = this.service.Details;
  }

}