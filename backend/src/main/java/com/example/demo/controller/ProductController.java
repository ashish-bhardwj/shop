package com.example.demo.controller;

import java.util.List;

import javax.validation.Valid;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Products;
import com.example.demo.repository.ProductRepository;
import com.example.demo.service.ServerService;

@RestController
@RequestMapping()
@CrossOrigin(origins = "http://localhost:4200")
public class ProductController {
	
	@Autowired
	ServerService serverService;
	
	@GetMapping("/products")
	public List<Products> getAllBooks() {
	  return serverService.findAllBooks();
	}
	
	@GetMapping("/products/{id}")
	  public Products getBookById(@PathVariable("id") ObjectId id) {
		System.out.println("id");
	    return serverService.findBookById(id);
	  }
	
	@PostMapping("/books")
	  public Products addBook(@Valid @RequestBody Products books) {
		books.set_id(ObjectId.get());
		System.out.println("Id:"+books.get_id());
	    return serverService.addBook(books);
	  }
	
	@PutMapping("/{id}")
	  public void modifyBookById(@PathVariable("id") ObjectId id, @Valid @RequestBody Products books) {
	    books.set_id(id);
	    serverService.modifyBookById(books);
	  }
	  
	  
	@DeleteMapping("/{id}")
	  public void deleteBook(@PathVariable ObjectId id) {
		serverService.deleteBook(id);
	  }

}
