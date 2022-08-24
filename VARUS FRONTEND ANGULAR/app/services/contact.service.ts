import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from '../contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  baseUrl="http://localhost:8081/contact";
  constructor(private httpClient: HttpClient) { }
 
  contactUs(contact: Contact): Observable<Object> {
     console.log(contact);
     return this.httpClient.post(`${this.baseUrl}`,contact);
  }
}
