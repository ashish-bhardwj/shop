import { Component, OnInit } from '@angular/core';
import { Product } from 'app/model/product';
import { ProductService } from 'app/product/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartProducts:Product[];
  totalPrice:number;
  count:number;

  messageTitle = 'No Products Found in Cart';
	messageDescription = 'Please, Add Products to Cart';

  constructor(private productService:ProductService) { }

  ngOnInit() {
    this.getCartProducts();
  }

  getCartProducts(){
    this.cartProducts=this.productService.getCartProduct();
    this.calculatePrice();
  }

  calculatePrice(){
    this.totalPrice = 0;
		this.cartProducts.forEach((product) => {
			this.totalPrice += product.cost * product.count;
		});

  }

  removeCartProduct(product:Product){
    this.productService.removeCartProduct(product);

    this.getCartProducts();
  }

  addCount(product:Product){
    this.productService.addCount(product);
    this.getCartProducts();
    
  }

  removeCount(product:Product){
    this.productService.removeCount(product);
    this.getCartProducts();   
  }

}
