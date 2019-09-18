package com.example.demo.controller;

import javax.validation.Valid;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Products;
import com.example.demo.model.User;
import com.example.demo.service.ServerService;

@RestController
@RequestMapping()
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {
	
	@Autowired
	ServerService serverService;
	
	@PostMapping("/login")
	  public boolean validate(@RequestBody User user) {
		
	    return serverService.login(user);
	  }

}
