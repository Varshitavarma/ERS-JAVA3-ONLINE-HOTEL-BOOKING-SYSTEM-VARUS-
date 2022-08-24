package com.app.controller;

 

import org.springframework.web.bind.annotation.RestController;

 

import com.app.exception.ResourceNotFoundException;
import com.app.model.User;
import com.app.repo.UserRepo;

 

import java.util.HashMap;
import java.util.List;
import java.util.Map;

 

import javax.validation.Valid;

 

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

 

@RestController
@CrossOrigin(origins="http://localhost:4200/")

 

public class UserController {
    
    @Autowired
    private UserRepo userRepo;
    
    @PostMapping("/users")
 public User addUser (@RequestBody User user ) {
     return userRepo.save(user);
 }
    
    @GetMapping("/users")
    public List<User> getAllUser(){
        return userRepo.findAll();
    }
    
    @GetMapping("/users/{id}")
    public ResponseEntity<User> getUserById(@PathVariable(value = "id") String email)
            throws ResourceNotFoundException {
        User user = userRepo.findById(email)
                .orElseThrow(() -> new ResourceNotFoundException("User not found for this id :: " + email));
        return ResponseEntity.ok().body(user);
    }
    
    @PutMapping("/users/{id}")
    public ResponseEntity<User> updateUser(@PathVariable(value = "id") String email,
            @Valid @RequestBody User userDetails) throws ResourceNotFoundException {
        User user = userRepo.findById(email)
                .orElseThrow(() -> new ResourceNotFoundException("User not found for this id :: " + email));
        user.setEmail(userDetails.getEmail());
        user.setFname(userDetails.getFname());
        user.setLname(userDetails.getLname());
        user.setPhone(userDetails.getPhone());
        user.setPassword(userDetails.getPassword());
        user.setGender(userDetails.getGender());
        final User updatedUser = userRepo.save(user);
        return ResponseEntity.ok(updatedUser);
}
    
    @DeleteMapping("/users/{id}")
    public Map<String, Boolean> deleteUser(@PathVariable(value = "id") String email)
            throws ResourceNotFoundException {
        User user = userRepo.findById(email)
                .orElseThrow(() -> new ResourceNotFoundException("User not found for this id :: " + email));

 

        userRepo.delete(user);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }
}




