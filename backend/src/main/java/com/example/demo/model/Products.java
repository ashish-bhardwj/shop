package com.example.demo.model;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "products")
public class Products {
	
	@Id
	public ObjectId _id;
	
	private String productName;
	private String category;
	private int cost;
	private String description;
	private int count;
	
	public String get_id() { 
		return _id.toHexString();
		}
	
	public void set_id(ObjectId _id) {
		this._id = _id; 
		}
	public String getProductName() {
		return productName;
	}
	public void setProductName(String productName) {
		this.productName = productName;
	}
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	public int getCost() {
		return cost;
	}
	public void setCost(int cost) {
		this.cost = cost;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public int getCount() {
		return count;
	}
	public void setCount(int count) {
		this.count = count;
	}
	
	public Products() {
		
	}
	
	public Products(ObjectId _id, String productName, String category, int cost, String description, int count) {
		super();
		this._id = _id;
		this.productName = productName;
		this.category = category;
		this.cost = cost;
		this.description = description;
		this.count = count;
	}
	
	

}
