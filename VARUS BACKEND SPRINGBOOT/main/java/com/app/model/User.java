package com.app.model;

 

import javax.persistence.Column;  
import javax.persistence.Entity;  
import javax.persistence.Id;  
import javax.persistence.Table;  
//mark class as an Entity   
@Entity  
//defining class name as Table name  
@Table(name="users")  
public class User  
{  
//Defining book id as primary key  
@Id  
@Column  
private String email;  
@Column  
private String fname;  
@Column  
private String lname;  
@Column  
private String phone; 
@Column  
private String password; 
@Column  
private String gender;
public String getEmail() {
    return email;
}
public void setEmail(String email) {
    this.email = email;
}
public String getFname() {
    return fname;
}
public void setFname(String fname) {
    this.fname = fname;
}
public String getLname() {
    return lname;
}
public void setLname(String lname) {
    this.lname = lname;
}
public String getPhone() {
    return phone;
}
public void setPhone(String phone) {
    this.phone = phone;
}
public String getPassword() {
    return password;
}
public void setPassword(String password) {
    this.password = password;
}
public String getGender() {
    return gender;
}
public void setGender(String gender) {
    this.gender = gender;
} 

 

@Override
public String toString() {
    return "Employee [email=" + email + ", fname=" + fname + ", lname=" + lname + ", password=" + password+ ", phone=" +phone+ ", gender=" +gender+"]";
}

 


}

