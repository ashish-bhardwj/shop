import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Product } from 'app/model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  readonly baseURL='http://localhost:3000/products';
  readonly issueURL='http://localhost:3000/books/issue';
  headerCartCount=0;

   constructor(private http: HttpClient) {

    this.calculateLocalCartProdCounts();
    }
 
 
   getProductsList(){
     return this.http.get(this.baseURL);
   }
 
   getBook(_id:string){
     console.log("id"+_id);
     return this.http.get(this.baseURL+`/${_id}`);
   }

   getMyBooksList(_id:string){
     return this.http.get(this.baseURL+'/mybooks'+`/${_id}`);
   }
 
   getMyFavouriteBooksList(_id:string){
     return this.http.get(this.baseURL+'/favourite'+`/${_id}`);
   }

   addToCart(product:Product){
    let a: Product[];

		a = JSON.parse(localStorage.getItem('avct_item')) || [];

		a.push(product);
		setTimeout(() => {
      localStorage.setItem('avct_item', JSON.stringify(a));
      this.calculateLocalCartProdCounts();
		}, 500);
   }

   getCartProduct():Product[]{
    let a: Product[];
    a = JSON.parse(localStorage.getItem("avct_item") || "[]");
    return a;
   }

   removeCartProduct(product:Product){
    const products: Product[] = JSON.parse(localStorage.getItem('avct_item'));

		for (let i = 0; i < products.length; i++) {
			if (products[i]._id === product._id) {
				products.splice(i, 1);
				break;
			}
		}
		// ReAdding the products after remove
    localStorage.setItem('avct_item', JSON.stringify(products));
    this.calculateLocalCartProdCounts();
   }

   addCount(product:Product){
    const products: Product[] = JSON.parse(localStorage.getItem('avct_item'));

		for (let i = 0; i < products.length; i++) {
			if (products[i]._id === product._id) {
				products[i].count+=1;
				break;
			}
		}
		// ReAdding the products after remove
		localStorage.setItem('avct_item', JSON.stringify(products));
   }

   removeCount(product:Product){
    const products: Product[] = JSON.parse(localStorage.getItem('avct_item'));

		for (let i = 0; i < products.length; i++) {
			if (products[i]._id === product._id) {
        if(products[i].count>1){
          products[i].count-=1;
        }	
				break;
			}
		}
		// ReAdding the products after remove
		localStorage.setItem('avct_item', JSON.stringify(products));
   }

   getLocalCartProducts(): Product[] {
		const products: Product[] = JSON.parse(localStorage.getItem('avct_item')) || [];

		return products;
	}

	// returning LocalCarts Product Count
	calculateLocalCartProdCounts() {
		this.headerCartCount = this.getLocalCartProducts().length;
  }
  
  logout(){
    localStorage.clear();
    this.calculateLocalCartProdCounts();
  }
 
}
