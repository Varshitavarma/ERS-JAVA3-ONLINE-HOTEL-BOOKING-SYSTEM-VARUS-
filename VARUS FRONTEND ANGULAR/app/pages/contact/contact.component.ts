import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/contact';
import { ContactService } from 'src/app/services/contact.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contact:Contact =new Contact();
 
  constructor(private contactService: ContactService) { }
 
  ngOnInit(): void {
  }
 
  contactUs(){
    console.log(this.contact);
    
    this.contactService.contactUs(this.contact).subscribe(data=>{
      alert("Data saved successfully")
     },error=>alert("oh no ! Error"));
  }
 
}