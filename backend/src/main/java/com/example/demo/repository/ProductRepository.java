package com.example.demo.repository;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.demo.model.Products;

public interface ProductRepository extends MongoRepository<Products,ObjectId> {
	
	Products findBy_id(ObjectId id);

}
