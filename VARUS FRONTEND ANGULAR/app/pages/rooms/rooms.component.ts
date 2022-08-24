import { Component, OnInit } from '@angular/core';
import { bookDetailsService } from 'src/app/services/bookdetails.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

  constructor(private service:bookDetailsService) { }
  foodData:any;
  ngOnInit(): void {
    this.foodData = this.service.Details;
  }

}