package com.app.controller;

 

import org.springframework.web.bind.annotation.RestController;

 

import com.app.model.Contact;
import com.app.repo.ContactRepo;

 

import java.util.List;

 

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

 

@RestController
@CrossOrigin(origins="http://localhost:4200/")
public class ContactController {
    @Autowired
    private ContactRepo contactRepo;
    @PostMapping("/contact")
 public Contact contactUs (@RequestBody Contact contact ) {
     return contactRepo.save(contact);
 }
    @GetMapping("/contact")
    public List<Contact> getAllUser(){
        return contactRepo.findAll();
    }
}