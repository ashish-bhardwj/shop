package com.example.demo.service;

import java.util.List;

import javax.validation.Valid;

import org.bson.types.ObjectId;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.demo.model.Products;
import com.example.demo.model.User;

public interface ServerService {
	
	List<Products> findAllBooks();
	
	User findByEmail(String email);
	
	public void modifyBookById(Products books);
	
	public Products addBook(Products books);

	Products findBookById(ObjectId id);

	void deleteBook(ObjectId id);

	boolean login(User user);
	
	//public void deleteBook(ObjectId id);
	
	
	
	

}
