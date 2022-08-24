import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {
   baseUrl="http://localhost:8081/users";
  
  constructor(private http: HttpClient) { }
 
  registerUser(user: User): Observable<Object> {
     console.log(user);
     return this.http.post(`${this.baseUrl}`,user);
  }
  getUser(email: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${email}`);
  }
  updateUser(email: string, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${email}`, value);
  }
 
  deleteUser(email: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${email}`, { responseType: 'text' });
  }
 
  getUserList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}