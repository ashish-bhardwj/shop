package com.example.demo.service;

import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Products;
import com.example.demo.model.User;
import com.example.demo.repository.ProductRepository;
import com.example.demo.repository.UserRepository;

@Service
public class ServerServiceImpl implements ServerService{
	
	@Autowired
	ProductRepository serverRepository;
	
	@Autowired
	UserRepository userRepository;

	@Override
	public List<Products> findAllBooks() {
		// TODO Auto-generated method stub
		 return serverRepository.findAll();
	}

	@Override
	public User findByEmail(String email) {
		// TODO Auto-generated method stub
		 return userRepository.findByEmail(email);
	}
	
	@Override
	public Products addBook(Products books) {
		// TODO Auto-generated method stub
		return  serverRepository.save(books);
	}

	@Override
	public void modifyBookById(Products books) {
		// TODO Auto-generated method stub
		serverRepository.save(books);
	}

	@Override
	public Products findBookById(ObjectId id) {
		// TODO Auto-generated method stub
		return serverRepository.findBy_id(id);
	}

	@Override
	public void deleteBook(ObjectId id) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public boolean login(User user) {
		// TODO Auto-generated method stub
		return false;
	}


	/*
	 * @Override public void deleteBook(ObjectId id) { // TODO Auto-generated method
	 * stub serverRepository.delete(serverRepository.findBy_id(id)); }
	 */

}
