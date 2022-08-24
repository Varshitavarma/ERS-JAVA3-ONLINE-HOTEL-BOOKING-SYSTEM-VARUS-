package com.app.repo;

 

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

 

import com.app.model.Contact;

 

@Repository
public interface ContactRepo extends JpaRepository<Contact, String>{
    

 

}